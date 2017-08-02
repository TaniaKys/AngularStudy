angular.module("myController", [])

//create controller
    .controller("myInfo", ["$scope", "CalculationService", function ($scope, CalculationService) {
        var me = $scope.me = {};
        me.name = "Tania";
        me.surname = "Kysla";
        me.title = "Java developer";
        me.likes = 0;

        $scope.incLike = function () {
            me.likes = CalculationService.incLike(me.likes);
        }
    }])

    //create own tags
    .directive("welcomeMessage", function () {
        return {
            restrict: "E",
            template: "<div> hello, how are you? </div>"
        }
    })

    .directive("otherMessage", function () {
        return {
            restrict: "A", //also can be both "AE"
            template: "<div> La-la-la </div>"
        }
    })

    //create service
    .factory("CalculationService", function () {
        var calculations = {};

        calculations.incLike = function (likes) {
            return likes + 1;
        };
        return calculations;
    });