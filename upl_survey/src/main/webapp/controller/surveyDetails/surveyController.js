upl_survey.controller("userDetilsController",['$scope', 'userDetilsService', function($scope, userDetilsService) {
			console.log("In controller");
			$scope.getAllForms = function() {
				console.log("In function");
				userDetilsService.getAllForms($scope.password,$scope.password )
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
						$location.url('/userManagement.html');
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
				})
			}
			
			$scope.updateForm = function() {
				console.log("In function");
				userDetilsService.updateForm($scope.id,$scope.form_detail,$scope.form_id,$scope.last_updated_by)
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
						$location.url('/userManagement.html');
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
				})
			}
			
			$scope.deleteForm = function() {
				console.log("In function");
				userDetilsService.deleteForm($scope.id)
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
						$location.url('/userManagement.html');
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
				})
			}
			
			$scope.createForm = function() {
				console.log("In function");
				userDetilsService.createForm($scope.form_detail,$scope.form_id,$scope.created_by,$scope.last_updated_by,$scope.language_id)
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
						$location.url('/userManagement.html');
					// $window.location.href = 'view/SurveyList.html';
				}, function(response) {
					$scope.errors = response.data.errorMessages;
				})
			}
			
		} ]);
		
upl_survey.service('userDetilsService', ['$http',
		function($http) {

			this.getAllForms = function getAllForms() {
				return $http({
					method : 'POST',
					url : '/upl_survey/getAllForms',
				});
			}

		this.updateForm = function updateForm(id,form_detail,form_id,last_updated_by) {
			return $http({
				method : 'GET',
				url : '/upl_survey/updateForm',
				params : {
					id : id,
					form_detail : form_detail,
					form_id : form_id,
					last_updated_by : last_updated_by
				}
			});
		}
		
		this.deleteForm = function deleteForm(id) {
			return $http({
				method : 'GET',
				url : '/upl_survey/deleteForm',
				params : {
					id : id
				}
			});
		}
		
		this.createForm = function createForm(form_detail,form_id,created_by,last_updated_by,language_id) {
			return $http({
				method : 'GET',
				url : '/upl_survey/updateForm',
				params : {
					form_detail : form_detail,
					form_id : form_id,
					created_by : created_by,
					last_updated_by : last_updated_by,
					language_id : language_id
				}
			});
		}
	}
]);
