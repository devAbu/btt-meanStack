function loginCtrl($scope, $http) {
    $scope.email = "";
    $scope.pass = "";
    $scope.text = "password";
    $scope.change = function () {
        if ($scope.text == "password") {
            $scope.text = "text";
        } else {
            $scope.text = "password";
        }
    }
}
    /* $scope.signButton = function ajax($scope, $http){
        url:"#!forgot",
        //dataType: "json",
        method: "post".
        data: "abu",
        header: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }. */
