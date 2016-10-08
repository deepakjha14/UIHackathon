app.factory('sapUIService', ['$http', function($http){
	
	var sapURL = " https://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals";

	var resultData = function(){

		return $http({method:"GET", url: sapURL}).then(function(result){
            return result.data;
        });

	};

	return {
		resultData:resultData
	};
}]);