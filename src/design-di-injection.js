
var c = angular.module('controllers', ['palSettingsModule']);

c.controller('ExampleCtrl', function (palSettings, $scope) {
    
    $scope.getCurrentLanguage = function () {
        return palSettings.getCurrentLanguage();
    }
});
