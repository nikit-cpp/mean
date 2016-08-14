/**
 * Created by nik on 08.01.16.
 */


var myApp = angular.module('myApp', []);


myApp.controller('NikitaAppController', ['$scope', '$http',

    function ($scope, $http){

        console.log("That is controller.");

        var refresh = function(){
            $http.get('/contactlist2').success(
                function(response){
                    console.log('I got data what I requested');
                    $scope.contactList3 = response;
                    $scope.contact = {};
                }
            );
        };

        refresh();

        $scope.addContact = function(){
            console.log($scope.contact);
            $http.post('/contactlist2', $scope.contact).success(function(resp){
                console.log(resp);
                refresh();
            });
        };

        $scope.remove = function(id){
            console.log("Removing", id);
            $http.delete("/contactlist2/" + id).success(function(response){
              refresh();
            });
        }

    }

]);
