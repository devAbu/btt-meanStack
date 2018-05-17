function feedbackCtrl($scope) {
    $scope.textarea = "";
    $scope.check = function check() {
        console.log($scope.textarea);
        /* location.href = "http://localhost:3000/insert" + "?feedback=" + $scope.textarea  */
    }
}