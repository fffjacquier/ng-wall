angular.module('parisApp.services', [])
    .factory('listService', function($http) {

        var parisAPI = {};

        parisAPI.getList = function() {
            return $http({
                'method': 'GET',
                'url': 'http://ngwall.dev/data.json' /*?callback=JSON_CALLBACK*/
            });
        };

        return parisAPI;

    });