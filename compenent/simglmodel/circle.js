function circle (){

	var simgl = new s3.Shape();

	var canvas = s3.dom('canvas'),
		can = simgl.set(canvas),
		ctx = canvas.getContext('2d');

	can.attr('width').val('960').attr('height').val('500').attr('className').val('bgwhite');

	var width = can.attr("width").val(),
		height = can.attr("height").val(),
		radius = 32;


	var app = simgl.tool(ctx),
		scene = app.scene,
		getBlock = app.createGradient,
		getBlock20 = app.createGradient20;

	var colorOrPosition = app.amount(20).handleModule(getBlock20).map(function(opt) {
		return {
			index: opt,
			x: Math.round(Math.random() * (width - radius * 2) + radius),
			y: Math.round(Math.random() * (height - radius * 2) + radius),
		}
	});

	// var fz = simgl.freezeProperty(colorOrPosition);

	var cr = new app.Manager(scene);

	var circleShape = cr.graphics.addComponent('circleShape', {
		type: 'Array',
		property: colorOrPosition
	});

	var restore = circleShape.config.set;
	restore.type = 'Array';

	var colors = ['#32e0a3','#eea033','#aae0a3'];

	for(var k = 0; k < 20; k++){
		restore.property[k] = {
			radius:Math.random() * radius,
		};
	}

	app.root.addChild(cr);

	console.log(simgl)
}


/*
property[0] = 
	{
		x : 
		y : 
		speed : 
		radius :
		startAngles　：
		index : 
	}
*/