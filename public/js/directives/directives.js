app.directive('centerV', ['$window', function($window){
	var elem;
	
	var resize = function() {
		elem.css('margin-top', ($window.innerHeight - elem[0].offsetHeight) / 2);
	}
		
	angular.element($window).on('resize', resize);

	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		

		link: function($scope, iElm, iAttrs, controller) {
			elem = iElm;
			resize();
		}
	};
}]);