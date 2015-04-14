var app = angular.module('SowaHome', ['ngRoute', 'ngAnimate', 'angular-parallax', 
	'scroll-animate-directive', 'ui.bootstrap', 'angular-ladda']);

///////////////////////////////////////
app.config(['$routeProvider',
  function($routeProvider) {
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
  }]);
///////////////////////////////////////
app.controller('mainCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http){
	$scope.year = new Date().getFullYear();
	$scope.introTextShowed = true;

	var imgPath = "/img/technologies/";

	$scope.technologies = [
		{ 
			name: ".NET Framework",
			desc: "",
			img: imgPath + "netframework.png",
			url: "http://pl.wikipedia.org/wiki/.NET_Framework",
		},
		{ 
			name: "ASP.NET MVC",
			desc: "",
			img: imgPath + "asp.png",
			url: "http://www.asp.net/mvc",
		}
		,
		{ 
			name: "NodeJS",
			desc: "",
			img: imgPath + "node.png",
			url: "https://nodejs.org/",
		},
		{ 
			name: "AngularJS",
			desc: "",
			img: imgPath + "angular.png",
			url: "https://angularjs.org/",
		},
		{ 
			name: "jQuery",
			desc: "",
			img: imgPath + "jquery.png",
			url: "https://jquery.com/",
		},
		{ 
			name: "Git",
			desc: "",
			img: imgPath + "git.png",
			url: "http://git-scm.com/",
		},
		{ 
			name: "DevExpress",
			desc: "",
			img: imgPath + "devexpress.png",
			url: "https://www.devexpress.com/",
		},
		{ 
			name: "Visual Studio",
			desc: "",
			img: imgPath + "vs.png",
			url: "https://www.visualstudio.com/",
		},
		{ 
			name: "Intellij IDEA",
			desc: "",
			img: imgPath + "intellij.png",
			url: "https://www.jetbrains.com/idea/",
		},
	]

	$(document).ready(function() {
		$scope.headingAnim = "fadeInLeft";
		$timeout(function() {
			$scope.leadAnim = "fadeInRight show";
			$timeout(function() {
				$scope.buttonAnim = "fadeInUp";
			}, 300);
		}, 300);
	});

	$scope.alert = {};

	$scope.sendMail = function(mail) {
		$scope.sendingMail = true;
		$http.post('/sendmail', mail).
		  success(function(data, status, headers, config) {
		  	if (data.success) {
				$scope.alert.message = "Wiadomość została wysłana poprawnie.";
				$scope.alert.type = "success";
				$scope.msg = {};
		  	} else {
		  		$scope.alert.message = "Błąd podczas wysyłania wiadomości.";
				$scope.alert.type = "danger";
		  	}
		  }).
		  error(function(data, status, headers, config) {
		    $scope.alert.message = "Błąd podczas wysyłania wiadomości.";
			$scope.alert.type = "danger";
			console.log(data);
		  }).then(function() {
		  	$scope.alert.visible = true;
			$scope.sendingMail = false;
		  });
	};
}]);
///////////////////////////////////////
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

app.directive('socialButtons',  function(){
	return {
		templateUrl: '/html/partial/socialButtons.html',
	};
});