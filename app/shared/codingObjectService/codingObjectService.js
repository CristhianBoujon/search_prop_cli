angular.module("shared")
	.service("codingObjectService", function(){
		
		this.encode = function(obj){
			return btoa(JSON.stringify(obj));
		};

		this.decode = function(encodedObj){
			console.log(encodedObj);
			return JSON.parse(atob(encodedObj));
		};
	});