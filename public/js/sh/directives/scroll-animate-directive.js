/*global angular,window,document*/
(function () {
    'use strict';
}());

angular.module('scroll-animate-directive', [])
    .controller('aniDistances', ['$scope', function ($scope) {
        $scope.getScrollOffsets = function (w) {

            // Use the specified window or the current window if no argument
            w = w || window;

            // This works for all browsers except IE versions 8 and before
            if (w.pageXOffset !== null) {
                return {
                    x: w.pageXOffset,
                    y: w.pageYOffset
                };
            }

            // For IE (or any browser) in Standards mode
            var d = w.document;
            if (document.compatMode === 'CSS1Compat') {
                return {
                    x: d.documentElement.scrollLeft,
                    y: d.documentElement.scrollTop
                };
            }

            // For browsers in Quirks mode
            return {
                x: d.body.scrollLeft,
                y: d.body.scrollTop
            };
        };
        $scope.getPosition = function (e) {
            return {
                x: e[0].offsetLeft,
                y: e[0].offsetTop
            };
        };

        $scope.getViewPortSize = function (w) {
            return {
                x: Math.max(document.documentElement.clientWidth, w.innerWidth || 0),
                y: Math.max(document.documentElement.clientHeight, w.innerHeight || 0)
            };
        };
    }])
    .directive('aniScroll', ['$window', function ($window) {
        return {
            restrict: 'A',
            controller: 'aniDistances',
            transclude: true,
            replace: true,
            template: '<div ng-transclude ng-show=\'show\'></div>',
            scope: {
                show: '@'
            },
            link: function (scope, element, attrs) {

                angular.element($window).bind('scroll', function () {
                    var targetOffset = attrs.aniScroll;
                    var offset = scope.getScrollOffsets($window);
                    if (offset.y >= targetOffset) {
                        scope.show = true;
                    } else {
                        scope.show = false;
                    }
                    scope.$apply();
                });
            }
        };
    }])
    .directive('aniView', ['$window', function ($window) {
        return {
            restrict: 'A',
            controller: 'aniDistances',
            transclude: true,
            replace: true,
            template: '<div ng-transclude></div>',
            scope: {
                delay: '=aniView'
            },
            link: function (scope, element, attrs) {
                element.css('opacity', 0);
                var isShowed = false;
                angular.element($window).bind('scroll', function () {
                    var position = scope.getPosition(element);

                    var offset = scope.getScrollOffsets($window);
                    var viewport = scope.getViewPortSize($window);
                    var coverage = {
                        x: parseInt(viewport.x + offset.x),
                        y: parseInt(viewport.y + offset.y)
                    }

                    if (isShowed === false) {
                        if (coverage.y >= position.y + 100 && coverage.x >= position.x) {
                            isShowed = true;
                            var classes = 'anim animated fadeInLeft';
                            if (scope.delay != null) {
                                classes += ' anim-delay' + scope.delay;
                            }
                            element.addClass(classes);
                        }
                    }
                });
            }
        };
    }]);
