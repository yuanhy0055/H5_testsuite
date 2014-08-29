function draw(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#00f";
	context.font = 'italic 30px sans-serif';
	context.textBaseline = 'top';
	
	context.fillText('采用fillText方法绘制字符串', 0, 0);
	context.font = 'bold 30px sans-serif';
	context.strokeText('采用strokeText方法绘制字符串', 0, 50);
}