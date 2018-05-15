var app = angular.module('loginApp', []);
app.controller('loginCtrl', ['$scope', function ($scope, $http) {
    $scope.email = "";
    $scope.pass = "";
    $scope.text = "password";
    $scope.change = function () {
        if ($scope.text == "password") {
            $scope.text = "text";
        } else {
            $scope.text = "password";
        }
    };
    /*, '$http' 
    
    $http.get('loginAjax.htm').then(function (res) {
        var data = res.data;
        console.log(data);
        if (data.indexOf('success') > -1) {
            console.log('done')
        } else {
            console.log('fail ')
        }
    }) */
}]);