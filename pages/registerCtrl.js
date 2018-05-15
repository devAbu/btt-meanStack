var app = angular.module('signApp', []);
app.directive('numberNo', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, numCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^A-Za-z ]/g, '');
                /* console.log(transformedInput); */
                if (transformedInput !== text) {
                    /* ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render(); */
                    numCtrl.$setValidity('num', false);
                } else {
                    numCtrl.$setValidity('num', true);
                }
                return transformedInput;
            }
            numCtrl.$parsers.push(fromUser);
        }
    };
});
app.directive('numbertwoNo', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, numCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^A-Za-z ]/g, '');
                /* console.log(transformedInput); */
                if (transformedInput !== text) {
                    /* ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render(); */
                    numCtrl.$setValidity('num', false);
                } else {
                    numCtrl.$setValidity('num', true);
                }
                return transformedInput;
            }
            numCtrl.$parsers.push(fromUser);
        }
    };
});