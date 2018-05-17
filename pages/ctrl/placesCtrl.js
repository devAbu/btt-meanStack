function placesCtrl($scope, $log, $window) {
    //iz baze podatke povuc
    /* $scope.changeWindow = function () {
        var url = "http://" + $window.location.host + "#!makeTour";
        $log.log(url);
        $window.location.href = url;
    }; */
    $scope.places = [{
            period: 'November - February',
            title: 'Zima',
            length: '5 days',
            people: '8 max'
        },
        {
            period: 'March - August',
            title: 'Jesen - Proljece - Ljeto',
            length: '7 days',
            people: '8 max'
        },
    ];

}