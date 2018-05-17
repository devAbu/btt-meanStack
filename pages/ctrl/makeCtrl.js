function makeCtrl($scope) {
    $scope.price = 0;
    $scope.people = 0;
    $scope.tour = 0;
    $scope.budget = 0;
    /* $scope.igman = false;
        $scope.mostar = false;
        $scope.jajce = false;
        $scope.konjic = false;
        $scope.bjelasnica = false;
        $scope.trebevic = false;
        $scope.sarajevo = false;
        $scope.jahorina = false;

        if ($scope.igman == true) {
            console.log('igman true');
        } else {
            console.log("igman false");
        } */

    $scope.check = function check(event) {
        console.log(event.target.checked);
        $scope.igman = event.target.checked;
        if ($scope.igman == true) {
            console.log('juhu');
            $scope.price += 75;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 75;
            console.log($scope.price);
        }
    }
    $scope.check2 = function check2(event) {
        console.log(event.target.checked);
        $scope.mostar = event.target.checked;
        if ($scope.mostar == true) {
            console.log('juhu');
            $scope.price += 300;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 300;
            console.log($scope.price);
        }
    }
    $scope.check3 = function check3(event) {
        console.log(event.target.checked);
        $scope.jajce = event.target.checked;
        if ($scope.jajce == true) {
            console.log('juhu');
            $scope.price += 200;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 200;
            console.log($scope.price);
        }
    }
    $scope.check4 = function check4(event) {
        console.log(event.target.checked);
        $scope.konjic = event.target.checked;
        if ($scope.konjic == true) {
            console.log('juhu');
            $scope.price += 135;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 135;
            console.log($scope.price);
        }
    }
    $scope.check5 = function check5(event) {
        console.log(event.target.checked);
        $scope.bjelasnica = event.target.checked;
        if ($scope.bjelasnica == true) {
            console.log('juhu');
            $scope.price += 55;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 55;
            console.log($scope.price);
        }
    }
    $scope.check6 = function check6(event) {
        console.log(event.target.checked);
        $scope.trebevic = event.target.checked;
        if ($scope.trebevic == true) {
            console.log('juhu');
            $scope.price += 100;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 100;
            console.log($scope.price);
        }
    }
    $scope.check7 = function check7(event) {
        console.log(event.target.checked);
        $scope.sarajevo = event.target.checked;
        if ($scope.sarajevo == true) {
            console.log('juhu');
            $scope.price += 85;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 85
            console.log($scope.price);
        }
    }
    $scope.check8 = function check8(event) {
        console.log(event.target.checked);
        $scope.jahorina = event.target.checked;
        if ($scope.jahorina == true) {
            console.log('juhu');
            $scope.price += 150;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 150;
            console.log($scope.price);
        }
    }
    $scope.check9 = function check9(event) {
        console.log(event.target.checked);
        $scope.zima = event.target.checked;
        if ($scope.zima == true) {
            console.log('juhu');
            $scope.price += 150;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 150;
            console.log($scope.price);
        }
    }
    $scope.check10 = function check10(event) {
        console.log(event.target.checked);
        $scope.ljeto = event.target.checked;
        if ($scope.ljeto == true) {
            console.log('juhu');
            $scope.price += 200;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 200;
            console.log($scope.price);
        }
    }
    $scope.check11 = function check11(event) {
        console.log(event.target.checked);
        $scope.proljece = event.target.checked;
        if ($scope.proljece == true) {
            console.log('juhu');
            $scope.price += 50;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 50;
            console.log($scope.price);
        }
    }
    $scope.check12 = function check12(event) {
        console.log(event.target.checked);
        $scope.jesen = event.target.checked;
        if ($scope.jesen == true) {
            console.log('juhu');
            $scope.price += 75;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 75;
            console.log($scope.price);
        }
    }
    $scope.check13 = function check13(event) {
        console.log(event.target.checked);
        $scope.yes = event.target.checked;
        if ($scope.yes == true) {
            console.log('juhu');
            $scope.price += 100;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 100;
            console.log($scope.price);
        }
    }
    $scope.check14 = function check14(event) {
        console.log(event.target.checked);
        $scope.no = event.target.checked;
        if ($scope.no == true) {
            console.log('juhu');
            $scope.price += 0;
            console.log($scope.price);
        } else {
            console.log('abu');
            $scope.price -= 0;
            console.log($scope.price);
        }
    }
    $scope.check15 = function check15() {
        console.log($scope.tour);
        console.log($scope.price);
        if ($scope.tour == 1) {
            $scope.price += 50;
        }
        if ($scope.tour == 2) {
            $scope.price += 75;
        }
        if ($scope.tour == 3) {
            $scope.price += 100;
        }
        if ($scope.tour == 4) {
            $scope.price += 125;
        }
        if ($scope.tour == 5) {
            $scope.price += 150;
        }
        if ($scope.tour == 6) {
            $scope.price += 175;
        }
        if ($scope.tour == 7) {
            $scope.price += 200;
        }
        if ($scope.tour == 8) {
            $scope.price += 225;
        }
        if ($scope.tour == 9) {
            $scope.price += 250;
        }
        if ($scope.tour == 10) {
            $scope.price += 300;
        }

    }
    $scope.check16 = function check16() {
        console.log($scope.people);
        console.log($scope.price);
        if ($scope.people == 1) {
            $scope.price += 50;
        }
        if ($scope.people == 2) {
            $scope.price += 75;
        }
        if ($scope.people == 3) {
            $scope.price += 100;
        }
        if ($scope.people == 4) {
            $scope.price += 125;
        }
        if ($scope.people == 5) {
            $scope.price += 150;
        }
        if ($scope.people == 6) {
            $scope.price += 175;
        }
        if ($scope.people == 7) {
            $scope.price += 200;
        }
        if ($scope.people == 8) {
            $scope.price += 225;
        }
        if ($scope.people == 9) {
            $scope.price += 250;
        }
        if ($scope.people == 10) {
            $scope.price += 300;
        }
        if ($scope.people == 11) {
            $scope.price += 300;
        }
        if ($scope.people == 12) {
            $scope.price += 300;
        }
        if ($scope.people == 13) {
            $scope.price += 300;
        }
        if ($scope.people == 14) {
            $scope.price += 300;
        }
        if ($scope.people == 15) {
            $scope.price += 300;
        }
    }

    $scope.check17 = function check17() {
        console.log($scope.budget);
        console.log($scope.price);
        if ($scope.budget < $scope.price) {
            console.log('no');
        }
    }
}