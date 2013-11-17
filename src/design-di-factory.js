var m = angular.module('palSettingsModule', []);

m.factory('palSettings', function () {
    var getCurrentLanguage = function() { return config.currentLang; };
      
    return {
        'getCurrentLanguage' : getCurrentLanguage
    }
});


