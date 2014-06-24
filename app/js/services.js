angular.module('parisApp.services', [ /*'ngResource'*/ ])
/*.factory('graffitiResource', function($resource) {
        return $resource('http://ngwall.dev/data.json');
    });*/
.factory('listService', function($http) {

    var parisAPI = {};

    parisAPI.getList = function() {
        return $http({
            'method': 'GET',
            'url': 'http://ngwall.dev/data.json',
            /*?callback=JSON_CALLBACK*/
            cache: true /*WallCache*/
        }).success(function(data, status, headers, config) {
            console.log(data);
            //successCb(data);
            return data;
        })
        /*.error(function(data, status, headers, config) {
            return errorCb(data);
        })*/
        ;
    };

    return parisAPI;

});
/**/