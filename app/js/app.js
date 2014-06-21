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
                controller: 'DetailController',
                resolve: {
                    isEditing: function() {
                        return false;
                    }
                }
            })
            .when('/detail/:id/edit', {
                templateUrl: '/views/detail.html',
                controller: 'DetailController',
                resolve: {
                    isEditing: function() {
                        return true;
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);

// create a cache for json file to speed up app, because I have only one request for all now
/*app.factory('WallCache', function($cacheFactory) {
    return $cacheFactory['WallData'];
});*/

Array.prototype.shuffle = function() {
    for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
}

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
/*
    .run(['$location', '$rootScope'], function($location, $rootScope) {

        // console.log($location.url());

    });$/*/