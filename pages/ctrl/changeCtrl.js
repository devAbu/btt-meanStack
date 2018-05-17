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
}

function response($scope, $http) {
    $http({
        method: "GET",
        url: "/update",
        contentType: "application/json; charset=utf-8",

    }).then(function (response) {
        $scope.check = response.data;
    });
}
/*$scope.signButton = function () {
    $http.get("/update").then(function (res){
        $scope.check = res.message
    })
} */