app.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){
	$scope.year = new Date().getFullYear();

	$scope.introTextShowed = true;

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