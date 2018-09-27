upl_survey.controller("userController", [
		'$scope',
		'$location',
		'userService',
		function($scope, $location, LoginService) {
			console.log("In controller");
			
			$scope.addUser = function() {
				$location.url('/addUser');
			}
			
			$scope.addUser = function() {
				console.log("In function");
				userService.addUser($scope.password, $scope.created_by,
						$scope.phone_no, $scope.email, $scope.user_master_id)
						.then(function(response) {
							console.log(response);
							$location.url('/userManagement');
						}, function(response) {
							$scope.errors = response.data.errorMessages;
							console.error('Error while creating User');
						})
			}

			$scope.editUserDetails = function() {
				$location.url('/editUser');
			}

			$scope.updateUserDetails = function() {
				console.log("In function");
				userService.updateUserDetails($scope.id, $scope.password,
						$scope.updated_by$scope.phone_no, $scope.email,
						$scope.user_master_id).then(function(response) {
					console.log(response);
					$location.url('/userManagement');
				}, function(response) {
					$scope.errors = response.data.errorMessages;
					console.error('Error while creating User');
				})
			}

			$scope.deleteUserDetails = function() {
				// TODO: Model popOut code
			}

			$scope.deleteUserDetails = function() {
				console.log("In function");
				userService.deleteUserDetails($scope.id).then(
						function(response) {
							console.log(response);
							$scope.userDetails = response.data.items;
							$location.url('/userManagement');
						}, function(response) {
							$scope.errors = response.data.errorMessages;
							console.error('Error while creating User');
						})
			}

			$scope.getAllUserDetails = function() {
				console.log("In function");
				userService.getAllUserDetails($scope.id).then(
						function(response) {
							console.log(response);
							$scope.userDetails = response.data.items;
							$location.url('/userManagement');
						}, function(response) {
							$scope.errors = response.data.errorMessages;
							console.error('Error while creating User');
						})
			}

		} ]);

upl_survey.service('userService', [
		'$http',
		function($http) {

			this.addUser = function addUser(password, created_by, phone_no,
					email, user_master_id) {
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

			this.updateUserDetails = function updateUserDetails(id, password,
					updated_by, phone_no, email, user_master_id) {
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
		} ]);
