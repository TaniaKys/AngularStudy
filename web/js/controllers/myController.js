angular.module("myController", [])

.controller("myInfo", ["$scope", function ($scope) {
    var me = $scope.me = {};
    me.name = "Tania";
    me.surname = "Kysla";
    me.title = "Java developer";
}])