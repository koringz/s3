// one
function lineAndarcAndcircle (){
var simgl = new s3.Shape();
var canvas = s3.dom('canvas');
var ctx = canvas.getContext('2d');

simgl.set(canvas).attr('width').val('960').attr('height').val('500').attr('className').val('bgred');

var width = simgl.set(canvas).attr("width").val(),
	height = simgl.set(canvas).attr("height").val(),
	radius = 32;

var app = simgl.tool(ctx);
var scene = app.scene;
var getBlock = app.createGradient;
var getBlock20 = app.createGradient20;
var colorOrPosition = app.amount(20).handleModule(getBlock20).map(function(opt) {
	return {
		index: opt,
		x: Math.round(Math.random() * (width - radius * 2) + radius),
		y: Math.round(Math.random() * (height - radius * 2) + radius),
	}
});

// var fz = simgl.freezeProperty(colorOrPosition);

var cr = new app.Manager(scene);

// rebuilt app
var arcShap = cr.graphics.addComponent('lineShape', {
	type: 'Array',
	property: colorOrPosition
});

var ma = new app.Manager(scene);
var ar = ma.graphics.addComponent('arcShape', {
	type: 'Array',
	property: colorOrPosition
});
var res = ar.config.set;
for(var k =0; k< 20; k++){
	res.property[k] = {
		x:colorOrPosition[k].x+k,
		y:colorOrPosition[k].y+k,
		radius:38,
		index:colorOrPosition[k].index
	};
}

var ct = new app.Manager(scene);
var circleShap = ct.graphics.addComponent('circleShape', {
	type: 'Array',
	property: colorOrPosition
});

var restores = circleShap.config.set;
for(var k = 0; k < 20; k++){
	restores.property[k] = {
		radius:Math.random() * radius,
	};
}



// final
app.root.addChild(ct);
app.root.addChild(cr);
app.root.addChild(ma);


}
// two
function lineAndcircleAndsectors (){
	var simgl = new s3.Shape();
	var canvas = s3.dom('canvas');
	var ctx = canvas.getContext('2d');

	simgl.set(canvas).attr('width').val('960').attr('height').val('500').attr('className').val('bgred');

	var width = simgl.set(canvas).attr("width").val(),
	height = simgl.set(canvas).attr("height").val(),
	radius = 32;

	var app = simgl.tool(ctx);
	var scene = app.scene;
	var getBlock = app.createGradient;
	var getBlock20 = app.createGradient20;
	var colorOrPosition = app.amount(20).handleModule(getBlock20).map(function(opt) {
	return {
		index: opt,
		x: Math.round(Math.random() * (width - radius * 2) + radius),
		y: Math.round(Math.random() * (height - radius * 2) + radius),
	}
	});

	// var fz = simgl.freezeProperty(colorOrPosition);



	var cr = new app.Manager(scene);
	var circleShap = cr.graphics.addComponent('circleShape', {
		type: 'Array',
		property: colorOrPosition
	});


	var at = new app.Manager(scene);
	// rebuilt app
	var as = at.graphics.addComponent('sectorsShape', {
		type: 'Array',
		property: colorOrPosition
	});
	var res = as.config.set;

	var se = 20;
	for(var k =0; k< 20; k++){
		se--;
		res.property[k] = {
			x1:colorOrPosition[k].x+k,
			y1:colorOrPosition[k].y+k,
			x:colorOrPosition[k].x,
			y:colorOrPosition[k].y,
			radius:12,
			index:colorOrPosition[se].index
		};
	}


	var ls = new app.Manager(scene);
	var arcShap = ls.graphics.addComponent('lineShape', {
		type: 'Array',
		property: colorOrPosition
	});


	// final
	app.root.addChild(ls);
	app.root.addChild(cr);
	app.root.addChild(at);


}