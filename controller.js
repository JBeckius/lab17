var app = angular.module('projectApp');


app.controller('projectCtrl', function($scope) {
	$scope.projects = [
			{
			title: "Project 1",
			author: "John Beckius",
			image: {
				path: "http://newsyac.com/wp-content/uploads/2015/10/dnews-files-2015-10-elephant-cancer-free-jpg.jpg",
				altText: "baby elephant"
				},
			content: "Here's a bunch of text about project 1. I hope this is a good description."
			},
			{
			title: "Project 2",
			author: "John Beckius",
			image: {
				path: "https://static1.squarespace.com/static/55fd6aa7e4b0ea280ebe83a4/55fd6baae4b0fa7ec74010ba/55fd6babe4b0fa7ec74015bb/1316606699013/1000w/Fur-Free-Elephant_Revision-.jpg",
				altText: "three elephants walking in the sunset"
				},
			content: "Here's a bunch of text about project 2. I hope this is a good description."
			},
			{
			title: "Project 3",
			author: "John Beckius",
			image: {
				path: "http://7art-screensavers.com/screenshots/elephants/calf-and-elephant.jpg",
				altText: "Elephant and baby"
				},
			content: "Here's a bunch of text about project 1. I hope this is a good description."
			}
			]
});
