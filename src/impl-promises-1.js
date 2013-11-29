/* nested and concurrent calls */  

var a = function (callbackFn) {
    var rb, rc; 
    
    $http.get('/api/fruit/all').success(response) {
        b(response.data.fruit[3]);
        c(response.data.fruit[3]);

        var b = function (fruitId) {
            $http.get('/api/fruit/details/' + fruitId)
            .success (response) {.
                rb = response.data;
                next();
            }
            .error (response) {
                console.log("Error!"); 
            }
        };
        /* same for c() */

        /* return control */
        var next() {
            if (rb && rc) callbackFn([rb, rc]);   
        }
    }
    .error (response) {
        console.log('error here');
    }
};
