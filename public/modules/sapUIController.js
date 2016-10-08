app.controller("sapUIController",function($scope, sapUIService){

	$scope.showLoader=true;
	
	var dataFromService = sapUIService.resultData();
	var allTags='';

	dataFromService.then(function(result){
		$scope.dataFromAPI = result.deals;
		$scope.showLoader=false;
		//console.log("The data from API is this"+JSON.stringify(result.deals));
	});

	$scope.cngTagString = function(tags){
		allTags ='';
		angular.forEach(tags, function(val, idx){
			if(tags.length>1 && idx+1<tags.length){
				allTags=allTags+' '+val+','
			} else{
				allTags=allTags+' '+val;
			}

		})
		console.log(allTags);
		return allTags;
	};

	$scope.openUrl = function(sndUrl){
		window.open(sndUrl, '_blank');
	};
});