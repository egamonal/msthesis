var result;
var asyncF = function () {
    $http.get('/api/fruit/all').success( response ) { 
        result = response.data;
        console.log('alert 1', result); 
    };
    
    console.log('alert 2', result);
}

asyncF();
