app.directive('centerV', ['$window', function ($window) {
    var elem;

    var resize = function () {
        elem.css('margin-top', ($window.innerHeight - elem[0].offsetHeight) / 2);
    }

    angular.element($window).on('resize', resize);

    return {
        restrict: 'A',
        link: function ($scope, iElm, iAttrs, controller) {
            elem = iElm;
            resize();
        }
    };
}]);

app.directive('socialButtons', function () {
    return {
        templateUrl: '/html/partial/socialButtons.html',
    };
});
