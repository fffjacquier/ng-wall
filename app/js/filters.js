angular.module('parisApp.filters', [])
    .filter('capitalize', function() {
        return function(input) {
            if (input) {
                return input[0].toUpperCase() + input.slice(1, input.length - 1) + input[input.length - 1].toUpperCase();
            }
        };
    })
    .filter('blankIfNegative', function() {
        return function(input) {
            if (input < 0) {
                return '';
            }
            return input;
        };
    })
    .filter('parseEntry', ['$parse',
        function($parse) {
            return function(val, users) {
                var i = 0;
                var data = {
                    raw: val
                };
                if (val) {

                }
            };
        }
    ]);