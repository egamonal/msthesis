controllersModule.controller('ActionCtrl', function ($window,$scope...) {
    var performExternalCall = function(p) { ... };
    var goto = function (p) {...};
    var setLanguage = function(l) {...};
    var openPopUp = function (args) {...}
    
    ...
    /**
     * @param l list of functions and their arguments to run
     */
    $scope.executeActions = function (l) {
        angular.forEach(l, function (args, fun) {
            // command pattern @see Osmani:2012
            $scope.execute.apply( $scope, [].slice.call(arguments, 0));
        });
    };

    $scope.execute = function (args, name) {
        // command pattern @see Osmani:2012
        if ($scope[name]) {
            $scope[name].apply( $scope, [].concat(arguments[0]));
        }
    }
    
    // and expose internal functions too:
    $scope.performExternalCall = performExternalCall;
    $scope.setLanguage = setLanguage;
    $scope.goto = goto;
    $scope.openPopUp = openPopUp;
});

