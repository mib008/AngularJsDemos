function PhoneListCtrl($scope, $http) {
    "use strict";

    var uri = "Scripts/Json/Phones.json";

    $http.get(uri).success(
        function (data) {
            $scope.phones = data;
        }
    );

    $scope.orderProp = 'age';
}