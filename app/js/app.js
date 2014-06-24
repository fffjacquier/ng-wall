Array.prototype.shuffle = function() {
    for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
}
// I should use angular native functions!!
function isUndefined(any) {
    return any === void 0; // void 0 returns undefined
}

function has(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
}

function isEmpty(obj) {
    // objects
    if (obj === null) return true;
    // strings, arrays
    return (obj.length === 0);
    for (var key in obj) {
        if (has(obj, key)) return false;
    }
}
// end of I should use ...

var app = angular.module('parisApp', [
    'parisApp.services',
    'parisApp.directives',
    'parisApp.filters',
    'parisApp.controllers',
    'ngRoute',
    'ngMap'
]);
app.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/views/home.html',
                controller: 'SearchController'
            })
            .when('/random', {
                templateUrl: '/views/random.php',
                controller: 'RandomController'
            })
            .when('/all', {
                templateUrl: '/views/all.html',
                controller: 'ListController'
            })
            .when('/about', {
                templateUrl: '/views/about.html',
                controller: 'AboutController'
            })
            .when('/map', {
                templateUrl: '/views/map.html',
                controller: 'MapController'
            })
            .when('/detail/:id', {
                templateUrl: '/views/detail.html',
                controller: function($scope, $routeParams, item) {

                    $scope.id = $routeParams.id;
                    //console.log($scope.id, list);
                    $scope.item = item; //list.data.list[$scope.id - 1];
                    //listService.getList().success(function(response) {
                    //$scope.item = response.list[$scope.id - 1];
                    //});
                },
                resolve: {
                    isEditing: function() {
                        return false;
                    },
                    item: function($q, $route, $timeout, listService) {

                        var deferred = $q.defer();
                        var id = $route.current.params.id;

                        $timeout(function() {
                            var list = listService.getList().success(function(arr) {
                                var len = arr.list.length;
                                for (var i = 0; i < len; i++) {
                                    (function(n) {
                                        if (arr.list[n].id == id) {
                                            //console.log(n, id, arr.list[n]);
                                            return deferred.resolve(arr.list[n]);
                                        }
                                    })(i);
                                }
                                return deferred.reject("no graffiti with that id")
                            });
                        }, 100);

                        return deferred.promise; //listService.getList();
                    }
                }
            })
        /*.when('/detail/:id/edit', {
                templateUrl: '/views/detail.html',
                controller: 'DetailController',
                resolve: {
                    isEditing: function() {
                        return true;
                    }
                }
            })*/
        /*.otherwise({
                redirectTo: '/'
            })*/
        ;
    }
]);
app.directive("error", function($rootScope) {
    return {
        restrict: "E",
        scope: {
            message: "@"
        },
        template: '<div class="alert-box alert" ng-show="isError">{{message}}</div>',
        link: function(scope) {
            $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
                scope.isError = true;
                scope.message = rejection;
            })
            $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
                scope.isError = false;
                scope.message = "";
            })
        }
    }
})
app.controller('MainController', function($rootScope, $scope, $location) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        //console.log("route change start");
    })
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
        //$scope.newLocation = $location.path();
        //console.log("route success:", $location.path());
    })
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        //console.log("route error", rejection);
    })
});

// create a cache for json file to speed up app, because I have only one request for all now
app.factory('WallCache', function($cacheFactory) {
    return $cacheFactory['WallData'];
});

/*
    .run(['$location', '$rootScope'], function($location, $rootScope) {

        // console.log($location.url());

    });$/*/