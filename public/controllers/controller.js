/**
 * Created by nik on 08.01.16.
 */


var myApp = angular.module('myApp', []);


myApp.controller('NikitaAppController', ['$scope', '$http',
    function ($scope, $http){
        console.log("That is controller.");

        $http.get('/contactlist2').success(
            function(response){
                console.log('I got data what I requested');
                $scope.contactList3 = response;
            }
        );
    }
]);

