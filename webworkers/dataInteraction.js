onmessage = function(event){
	var data = event.data;
	
	//将3的倍数并接成字符串并返回 
	var returnStr;
	var Array = data.split(";");
	//console.log("从前台传来的数据为：" + intArray);
	
	returnStr = "";	
	for(var i=0; i<Array.length; i++){
		if((parseInt(Array[i])%3) == 0){
			if(returnStr != ""){
				returnStr += ";";
			}
			returnStr += Array[i];
		}		
	}
	//console.log("传给前台的数据为：" + returnStr);
	postMessage(returnStr);
};