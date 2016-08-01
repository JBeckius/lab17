var app = angular.module('projectApp', []);

app.directive('project', function(){
	return {
		restrict: 'AE',
		templateUrl: 'templates/project.html',
		link: function(scope, elem, attrs){
		}
	};
});
