
var h = 0;
function hill (option){

	// sideBar
	var _direction = option.direction || 'top',
			_trails = Number(option.trails) || 10,
			_x = Number(option.x) || 50,
			_y = Number(option.y) || 50,
			_smooth =Number( option.smooth) || 5;


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

	var colorOrPosition = app.amount(1).handleModule(getBlock).map(function(opt) {
		return {
			index: opt,
			// x:  260,
			// y:  150,
		}
	});

	var _scene = new app.Manager(scene);
	var _hillShape = _scene.graphics.addComponent('hillShape', {
		type: 'Array',
		property: colorOrPosition
	});

	var Reset = _hillShape.config.set;
	Reset.type = 'Array';
	for(var k = 0; k < 1; k++){
		Reset.property[k] = {
			x : _x,
			y : _y,
			direction : _direction ,
			trails : _trails,
			smooth : _smooth 
		};
	}

	clearTimeout(mct);
	// clearTimeout(t);

	app.root.addChild(_scene);

	console.log(simgl)
}




/*

property[k] = {
	x : 1,
	y : 1,
	radius : 1,
	trails : 40,
	smooth : 11,
	direction : 'top',
};

*/