/* An implementation separating callbacks */
   
var a = function (callbackFn) {
    var rb, rc; 
    
    $http.get('/api/fruit/all').then(aCallback, aErrCallback);
    
    var aCallback = function (response) {
        b(response.data.fruit[3]);
        c(response.data.fruit[3]);    
    };
    
    var aErrCallback = function (response) { console.log("Error!"); };
    
    var b = function (fruitId) {
        $http.get('/api/fruit/details/' + fruitId)
            .then(bCallback, bErrCallback);
    };
 
    var bCallback = function (response) { 
        rb = response.data;
        next();
    };
    
    var bErrCallback = function (response) { console.log("Error!"); };

    /* same for c() */

    /* return control */
    var next() {
        if (rb && rc) callbackFn([rb, rc]);    
    }
};
