(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope', '$filter'];
    function LunchController($scope, $filter){
        $scope.tooMuch = function () {
            $scope.outNow = "This is some text"
        }
        
    }
}
)();
