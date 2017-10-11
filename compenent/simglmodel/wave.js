
function wave (){

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
var colorOrPosition = app.amount(3).handleModule(getBlock20).map(function(opt) {
	return {
		index: opt,
		x: Math.round(Math.random() * (width - radius * 2) + radius),
		y: Math.round(Math.random() * (height - radius * 2) + radius),
	}
});

// var fz = simgl.freezeProperty(colorOrPosition);

var cr = new app.Manager(scene);

var waveShape = cr.graphics.addComponent('waveShape', {
	type: 'Array',
	property: colorOrPosition
});

var restore = waveShape.config.set;
restore.type = 'Array';
restore.property[0] = {
	x: 10,
	y: 50,
	index:'#32e0a3'
};

restore.property[1] = {
	x: 20,
	y: 70,
	index:'#eea033'
};
restore.property[2] = {
	x: 30,
	y: 90,
	index:'#aae0a3'
};


app.root.addChild(cr);


console.log(app)

}
