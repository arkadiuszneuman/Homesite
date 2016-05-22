app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/partial1', {
            templateUrl: 'partial1.html'
        }).
        when('/partial2', {
            templateUrl: 'partial2.html'
        }).
        otherwise({
            redirectTo: '/partial1'
        });
    }
]);
