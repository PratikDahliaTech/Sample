var upl_survey = angular.module("upl_survey", [ 'ngRoute', 'ngResource' ]);

upl_survey.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true).hashPrefix('');
			$routeProvider.

			when('/', {
				templateUrl : '/loginForm.html',
				controller : 'LoginController'
			}).

			when('surveyList', {
				templateUrl : 'view/SurveyList.html',
				controller : 'LoginController'
			}).

			when('editSurvey', {
				templateUrl : 'view/editSurvey.html',
				controller : 'surveyController'
			}).

			when('addSurvey', {
				templateUrl : 'view/addSurvey.html',
				controller : 'surveyController'
			}).

			when('userList', {
				templateUrl : 'view/UserManagement.html',
				controller : 'userController'
			}).

			when('editUser', {
				templateUrl : 'view/editUser.html',
				controller : 'userController'
			}).

			when('addUser', {
				templateUrl : 'view/addUser.html',
				controller : 'userController'
			}).

			otherwise({
				redirectTo : '/'
			});

		} ]);
