/* 
  initialisation the palSettings service with promises 
  success scenario only
*/

// 1
var getConfig = function () {
    getGenericConfig();
    return deferred.promise;
};

// 2
var getGenericConfig = function () {
    $http.get('/static/frontend/config.json').then(
        genericConfigCallback,
        genericConfigErrorCallback
    );
};

var genericConfigCallback = function(response) {   
    config.generic = response.data;
    // overwrite parameters with query string
    setGenericInitialParams(); 
    getApplicationConfig(config.generic.app_id);
};

// 3
var getApplicationConfig = function (id, api_endpoint) {   
    $http.get(api_endpoint + '/app/'+ id + '/config.json')
    .then(
        applicationConfigCallback,
        applicationConfigErrorCallback
    );
};

var applicationConfigCallback = function (response) {
    config.app = response.data;
    // overwrite parameters with query string
    setApplicationInitialParams();
    getStructure(config.app.id, config.generic.api_endpoint);
};

// 5
var getStructure = function(id, api){
    $http.get(api + '/app/' + id + '/structure.json')
    .then(function (response) {
        config.structure = response.data;
        deferred.resolve(); // the promise is resolved! \o/
    });
};


/* public function init() */
init: function(p) {
    qs = p;
    return getConfig();
}
