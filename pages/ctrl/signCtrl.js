function signCtrl($scope) {
    $scope.first = "";
    $scope.last = "";
    $scope.email = "";
    $scope.pass = "";
    $scope.text = "password";
    $scope.change = function () {
        if ($scope.text == "text") {
            $scope.text = "password";
        } else {
            $scope.text = "text";
        }
    };
}