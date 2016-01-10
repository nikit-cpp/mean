/**
 * Created by nik on 08.01.16.
 */


var myApp = angular.module('myApp', []);


myApp.controller('NikitaAppController', ['$scope', '$http',
    function ($scope, $http){
        console.log("HLLL frm ctrl");
		
		$http.get('/contactlist2');
		
		var person1 = {
			name: "Tttim",
			email: "ololo@mail.ru",
			number: "(123) 456-78-90"
		};
		
		var person2= {
			name: "IVAN",
			email: "ivan@mail.ru",
			number: "(6665) 456-78-90"
		};
		
		var contactList = [person1, person2];
		
		$scope.contactList = contactList
    }
]);

