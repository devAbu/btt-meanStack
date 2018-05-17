function changeCtrl($scope) {
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
     /*$scope.signButton = function () {
        $http.get("/update").then(function (res){
            $scope.check = res.message
        })
    } */
}