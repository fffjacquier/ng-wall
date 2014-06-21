angular.module('parisApp.directives', [])
    .directive('reloadrandom', function() {
        return {
            /*restrict: 'A',*/
            template: '<a href=""><div class="all"><br/>reload 10 others?</div></a>',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    scope.$apply(attrs.reloadrandom);
                })
            }
        }
    })
/*.directive('map', function($window, $parse) {
        var counter = 0;
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/views/map.html',
            link: function(scope, element, attrs, controller) {

            }
        }
    })
    .directive('zoom', function() {
        return {
            restrict: 'A',
            require: 'map'
        }
    })
    .directive('center', function() {

    })*/
.directive('parisList', function() {
    /*
	// Array to store month names 
	var months = new Array('January',' February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December');
	// Array to store month days 
	var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	// Array to store week names 
	var weekDay = new Array('Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su');
	return {
		restrict: 'EA',
		require: '^ngModel',
		transclude: true,
		scope: {
			ngModel: '='
		},
		template: '<table class="calendarTable">\
			<thead>\
				<tr>\
					<td class="monthHeader colspan="7">{{monthName}} {{year}}</td>\
				</tr>\
			</thead>\
			<tbody>\
				<tr>\
					<td ng-repeat="d in weekDays">{{ d }}</td>\
				</tr>\
				<tr ng-repeat="arr in month">\
					<td ng-repeat="d in arr track by $index" ng-class="{currentDay: d == day}">{{ d | blankIfNegative }}</td>\
			</tbody>\
			<tfoot><tr><td colspan="7" ng-transclude></td></tr></tfoot>\
		</table>',
		link: function(scope, element, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function(date) {
				if(!date) {
					date = new Date();
				}
				var week_day, day_counter, i, curr_week;
				var day = date.getDate(),
						month = date.getMonth(),
						year = date.getFullYear();

				scope.days_in_this_month = monthDays[month];
				if(attrs.showshortmonth){
					scope.monthName = months[month].slice(0, 3);
				}else{
					scope.monthName = months[month];
				}
				scope.currentWeek = 0;
				scope.month = {};

				var thisMonth = new Date(year, month, 1),
						firstDay = new Date(thisMonth.setDate(1)).getDay(),
						weeksOfMonth = Math.ceil((firstDay + scope.days_in_this_month)/ 7) + 1;

				console.log(thisMonth, firstDay, weeksOfMonth, month);
				scope.weekDays = weekDay;
				// First week 
				curr_week = 0;
				scope.month[curr_week] = [];

				for (week_day = 0; week_day < thisMonth.getDay(); week_day++) {
					scope.month[curr_week][week_day] = week_day * -1;
				}
				week_day = thisMonth.getDay();
				for (day_counter = 1; day_counter <= scope.days_in_this_month; day_counter++) {
					week_day %= 7;
					if (week_day === 0) {
						curr_week += 1;
						scope.month[curr_week] = [];
					}
					scope.month[curr_week].push(day_counter);
					week_day += 1;
				}
				while(scope.month[curr_week].length < 7) {
					scope.month[curr_week].push(day_counter * -1);
				}
				scope.day = day;
				scope.year = year;
			});
		}
	};*/
})
/*
.directive('ensureHasDate', [function() {
	return {
		require: 'ngModel',
		scope: {
			'ngModel': '='
		},
		link: function(scope, element, attrs, ctrl) {
			scope.watch(attrs.ngModel, function(newval) {
				if(newval) {
					var date = chrono.parseData(newval);
					ctrl.$setValidity('hasDate', (date !== null));
				} else {
					ctrl.$setValidity('hasDate', false);
				}
			});
		}
	};
}])
.directive('ngFocus', [function() {
	var FOCUS_CLASS = "ng-focused";
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			ctrl.$focused = false;
			element.bind('focus', function(evt) {
				element.addClass(FOCUS_CLASS);
				scope.$apply(function() {ctrl.$focused = true;});
			}).bind('blur', function(evt) {
				element.removeClass(FOCUS_CLASS);
				scope.$apply(function() {ctrl.$focused = false;});
			});
		}
	};
}])
.directive('ensureUnique', ['$http', function($http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			scope.$watch(attrs.ngModel, function() {
				$http({
					method: 'POST',
					url: '/api/check/' + attrs.ensureUnique,
					data: {'field': attrs.ensureUnique}
				}).success(function(data, status, headers, cfg) {
					c.$setValidity('unique', data.ensureUnique);
				}).error(function(data, status, headers, cfg){
					c.$setValidity('unique', false);
				});
			});
		}
	};
}])*/
;