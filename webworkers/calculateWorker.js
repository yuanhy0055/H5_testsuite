onmessage = function(event)
{
	var num = event.data;
	var result = 0;
	for(var i=0; i<=num; i++){
		result = result + i;
	}
	//向线程创建源返回计算结果 
	postMessage(result);
};