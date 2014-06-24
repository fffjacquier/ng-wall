angular.module('parisApp.controllers', ['parisApp.services'])
    .controller('ListController', function($scope, listService) {

        $scope.list = [];
        listService.getList().success(function(response) {
            $scope.list = response.list;
        });

        // order by date by default
        $scope.orderProp = "date";
        $scope.reverse = false;

        // reorder
        $scope.$watch('orderProp', function(newval, oldval, scope) {
            //console.log('watch orderProp', newval);
            if (newval == 'date') {
                $scope.reverse = true;
            } else {
                $scope.reverse = false;
            }
        });
        $scope.sorting = function(item) {

        }

    })
    .controller('SearchController', function($scope, listService) {

        $scope.isUndefined = ($scope.qsearch === undefined || $scope.qsearch == ""); // || $scope.qsearch !== "");

        $scope.$watch(function() {
            console.log($scope.qsearch, $scope.isUndefined);
        });

        $scope.list = [];
        listService.getList().success(function(response) {
            $scope.list = response.list;
        });

    })
    .controller('DetailController', function($scope, $routeParams, list) {

        $scope.id = $routeParams.id;
        $scope.list = list;
        /*listService.getList().success(function(response) {
            $scope.item = response.list[$scope.id - 1];
        })*/
    })
    .controller('AboutController', function() {})
    .controller('RandomController', function($scope, listService) {
        $scope.shuffledList = [];
        listService.getList().success(function(response) {
            //
            //$scope.shuffledList = Array.prototype.shuffle.call(response.list).slice(0, 2);
            $scope.shuffledList = response.list.shuffle().slice(0, 10);
        });
    })
    .controller('MapController', function($scope, $window, listService) {

        //console.log("MapController");
        $scope.list = [];
        $scope.markers = [];

        listService.getList().success(function(response) {
            $scope.list = response.list;

            console.log($scope.map, $scope.google);

            var numMarkers = response.list.length;
            for (var i = 0; i < numMarkers; i++) {
                (function(n) {
                    var lat = $scope.list[n].lat;
                    var lng = $scope.list[n].lng;
                    var loc = new google.maps.LatLng(lat, lng);
                    $scope.markers[n] = new google.maps.Marker({
                        position: loc,
                        title: $scope.list[n].place
                    });
                    var infoWindow = new google.maps.InfoWindow({
                        content: '<h3 style="padding-bottom: 1em;">' + $scope.list[n].place + '</h3><img src="/' + $scope.list[n].src + '" alt="' + $scope.list[n].place + '" style="width:120px;float:left;padding-right:1em;" /> ' + $scope.list[n].tags.toString().split(',').join(', ')
                    });
                    google.maps.event.addListener($scope.markers[n], 'mouseover', function() {
                        infoWindow.open($scope.map, $scope.markers[n]);
                    });
                    google.maps.event.addListener($scope.markers[n], 'mouseout', function() {
                        infoWindow.close();
                    });
                    google.maps.event.addListener($scope.markers[n], 'click', function() {
                        var isZoomed = ($scope.map.getZoom() >= 20);
                        if (!isZoomed) {
                            $scope.map.setZoom(20);
                            $scope.map.setCenter(loc);
                        } else {
                            $window.location.href = '/detail/' + $scope.list[n].id;
                        }
                    });
                    console.log(lat, lng, $scope.list[n].place);
                    $scope.markers[n].setPosition(loc);
                    $scope.markers[n].setMap($scope.map);
                })(i);
            }
        })
    });