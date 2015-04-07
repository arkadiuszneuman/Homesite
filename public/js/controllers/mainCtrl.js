app.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){
	$scope.year = new Date().getFullYear();
	$scope.introTextShowed = true;

	$scope.technologies = [
		{ 
			name: "Microsoft .NET Framework",
			desc: "",
			img: "http://upload.wikimedia.org/wikipedia/en/0/0d/Microsoft_.NET_Framework_v4.5_logo.png",
			url: "http://pl.wikipedia.org/wiki/.NET_Framework",
		},
		{ 
			name: "ASP.NET MVC",
			desc: "",
			img: "http://blog.seekdotnet.com/wp-content/uploads/2011/09/logo-asp.net-mvc-285.gif",
			url: "http://www.asp.net/mvc",
		}
		,
		{ 
			name: "NodeJS",
			desc: "",
			img: "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png",
			url: "https://nodejs.org/",
		},
		{ 
			name: "AngularJS",
			desc: "",
			img: "http://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png",
			url: "https://angularjs.org/",
		},
		{ 
			name: "jQuery",
			desc: "",
			img: "http://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg",
			url: "https://jquery.com/",
		},
		{ 
			name: "Git",
			desc: "",
			img: "http://blog.x-aeon.com/wp-content/uploads/2011/11/Git-Logo-2Color-910x198.png",
			url: "http://git-scm.com/",
		},
		{ 
			name: "DevExpress",
			desc: "",
			img: "http://crackha.com/wp-content/uploads/DevExpress.jpg",
			url: "https://www.devexpress.com/",
		},
		{ 
			name: "Visual Studio",
			desc: "",
			img: "http://i.imgur.com/YqTqq.png",
			url: "https://www.visualstudio.com/",
		},
		{ 
			name: "Intellij IDEA",
			desc: "",
			img: "http://upload.wikimedia.org/wikipedia/commons/7/77/Logo_intellij_idea.gif",
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