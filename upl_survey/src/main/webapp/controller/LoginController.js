upl_survey.controller("LoginController", [
		'$scope',
		'$location',
		'LoginService',
		function($scope, $location, LoginService) {
			console.log("In controller");

			$scope.LoginUser = function() {
				console.log($scope.email, $scope.password);
				console.log("In function");
				LoginService.loginUser($scope.email, $scope.password).then(
						function(response) {
							console.log(response);
							$location.path('/surveyList')
						}, function(errResponse) {
							console.log(errResponse)
							console.error('Error while creating User');
						})
			}
		} ]);

upl_survey.service('LoginService', [ '$http', function($http) {

	this.loginUser = function loginUser(email, password) {
		console.log(email, password);
		return $http({
			method : 'GET',
			dataType : 'json',
			headers : {
				"Content-Type" : "application/json"
			},
			url : '/upl_survey/loginUser',
			params : {
				email : email,
				password : password
			}
		});
	}
} ]);