app.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){
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
		
		// { 
		// 	name: "HTML CSS JS",
		// 	desc: "",
		// 	img: "http://www.seanhelvey.com/wp-content/uploads/2014/08/html5-css-javascript-logos.png",
		// 	url: "http://pl.wikipedia.org/wiki/HTML5",
		// },
		
		//vs devexpress
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
}]);