app.controller('mainCtrl', ['$scope', function($scope){
	$scope.year = new Date().getFullYear();

	$scope.introTextShowed = true;
}]);