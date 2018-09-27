upl_survey.controller("LoginController",['$scope', '$location', 'LoginService', function($scope, $location, LoginService) {
			console.log("In controller");
			$scope.LoginUser = function() {
				console.log("In function");
				LoginService.loginUser($scope.password,$scope.password ).then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
					if($scope.userDetails.type ='ADMIN'){
						$location.url('/userManagement.html');
					} else if(($scope.userDetails.type ='USER') || ($scope.userDetails.type ='SURVEYOR')){
						$location.url('/surveyList.html');
					}
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
				})
			}
			
			$scope.addUser = function() {
				console.log("In function");
				LoginService.addUser($scope.password,$scope.created_by,$scope.phone_no,$scope.email,$scope.user_master_id)
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
						$location.url('/userManagement.html');
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
					console.error('Error while creating User');
				})
			}
			
			$scope.updateUserDetails = function() {
				console.log("In function");
				LoginService.updateUserDetails($scope.id,$scope.password,$scope.updated_by$scope.phone_no,$scope.email,$scope.user_master_id)
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
						$location.url('/userManagement.html');
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
					console.error('Error while creating User');
				})
			}
			
			$scope.deleteUserDetails = function() {
				console.log("In function");
				LoginService.deleteUserDetails($scope.id)
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
						$location.url('/userManagement.html');
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
					console.error('Error while creating User');
				})
			}
			
			$scope.getAllUserDetails = function() {
				console.log("In function");
				LoginService.getAllUserDetails($scope.id)
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
						$location.url('/userManagement.html');
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
					console.error('Error while creating User');
				})
			}
			
			
		} ]);
		
upl_survey.service('LoginService', ['$http',
		function($http) {

			this.loginUser = function loginUser(email, password) {
				return $http({
					method : 'GET',
					url : '/upl_survey/loginUser',
					params : {
						email : email,
						password : password
					}
				});
			}
			
			this.addUser = function addUser(password,created_by,phone_no,email,user_master_id) {
				return $http({
					method : 'GET',
					url : '/upl_survey/addUser',
					params : {
						password : password,
						created_by : created_by,
						phone_no : phone_no,
						email : email,
						user_master_id : user_master_id
					}
				});
			}
			
			this.updateUserDetails = function updateUserDetails(id, password, updated_by, phone_no, email, user_master_id) {
				return $http({
					method : 'GET',
					url : '/upl_survey/updateUserDetails',
					params : {
						id : id,
						password : password,
						updated_by : updated_by,
						phone_no : phone_no,
						email : email,
						user_master_id : user_master_id
					}
				});
			}
			
			this.updateUserDetails = function updateUserDetails(id) {
				return $http({
					method : 'GET',
					url : '/upl_survey/deleteUserDetails',
					params : {
						id : id
					}
				});
			}
			
			this.getAllUserDetails = function getAllUserDetails() {
				return $http({
					method : 'GET',
					url : '/upl_survey/deleteUserDetails',
				});
			}
		}
]);
