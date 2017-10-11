
function arcAndCircle (){
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

	var arcShap = cr.graphics.addComponent('arcShape', {
		type: 'Array',
		property: colorOrPosition
	});

	var res = arcShap.config.set;
	for(var k =0; k< 20; k++){
		res.property[k] = {
			x:colorOrPosition[k].x+k,
			y:colorOrPosition[k].y+k,
			index:'#aae0a3'
		};
	}


	var sc = new app.Manager(scene);
	// rebuilt app
	var circleShap = sc.graphics.addComponent('circleShape', {
		type: 'Array',
		property: colorOrPosition
	});

	var restores = circleShap.config.set;
	for(var k = 0; k < 20; k++){
		restores.property[k] = {
			radius:Math.random() * radius,
		};
	}

	app.root.addChild(cr);
	app.root.addChild(sc);

	// final

}

// second
function arcAndWave (){
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

	var fz = simgl.freezeProperty(colorOrPosition);

	var cr = new app.Manager(scene);

	var waveShape = cr.graphics.addComponent('waveShape', {
		type: 'Array',
		property: colorOrPosition
	});
	var arcs =waveShape.config.set;

	// rebuilt app
	var arcShap = cr.graphics.addComponent('arcShape', {
		type: 'Array',
		property: colorOrPosition
	});
	// final
	app.root.addChild(cr);


}

// third
function rectAndline (){
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

	var fz = simgl.freezeProperty(colorOrPosition);

	var cr = new app.Manager(scene);

	// rebuilt app
	var rectShape = cr.graphics.addComponent('rectShape', {
		type: 'Array',
		property: colorOrPosition
	});
	var lineShape = cr.graphics.addComponent('lineShape', {
		type: 'Array',
		property: colorOrPosition
	});


	// final
	app.root.addChild(cr);


}

// fourth
function circleAndsectors (){
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

	var fz = simgl.freezeProperty(colorOrPosition);

	var cr = new app.Manager(scene);

	// rebuilt app
	var circleShap = cr.graphics.addComponent('circleShape', {
		type: 'Array',
		property: colorOrPosition
	});
	var sectorsShape = cr.graphics.addComponent('sectorsShape', {
		type: 'Array',
		property: colorOrPosition
	});


	// final
	app.root.addChild(cr);


}

// fivth
function lineAndsectors (){
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

	var fz = simgl.freezeProperty(colorOrPosition);

	var cr = new app.Manager(scene);

	// rebuilt app
	var lineShape = cr.graphics.addComponent('lineShape', {
		type: 'Array',
		property: colorOrPosition
	});
	var sectorsShape = cr.graphics.addComponent('sectorsShape', {
		type: 'Array',
		property: colorOrPosition
	});


	// final
	app.root.addChild(cr);


}


// sixth
function waveAndcircle (){
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
	var colorOrPosition = app.amount(10).handleModule(getBlock).map(function(opt) {
		return {
			index: opt,
			x: Math.round(Math.random() * (width - radius * 2) + radius),
			y: Math.round(Math.random() * (height - radius * 2) + radius),
		}
	});

	// var fz = simgl.freezeProperty(colorOrPosition);

	var wc = new app.Manager(scene);

	// rebuilt app
	var waveShape = wc.graphics.addComponent('waveShape', {
		type: 'Array',
		property: colorOrPosition
	});
	waveShape.start({speed:1});

	var wave = waveShape.config.set;
	for(var k =0; k< 10; k++){
		wave.property[k] = {
			x:colorOrPosition[k].x+k,
			y:colorOrPosition[k].y+k,
			index:colorOrPosition[k].index,
			endPosition :{
				x: colorOrPosition[k].x
			}
		};
	}


	var cr = new app.Manager(scene);
	var circleShap = cr.graphics.addComponent('circleShape', {
		type: 'Array',
		property: colorOrPosition
	});


	// final
	app.root.addChild(wc);
	app.root.addChild(cr);

}

// seveth
function rectAndcircle (){
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

	var fz = simgl.freezeProperty(colorOrPosition);

	var rc = new app.Manager(scene);

	// rebuilt app
	var rectShape = rc.graphics.addComponent('rectShape', {
		type: 'Array',
		property: colorOrPosition
	});

	var cr = new app.Manager(scene);
	var circleShap = cr.graphics.addComponent('circleShape', {
		type: 'Array',
		property: colorOrPosition
	});


	// final
	app.root.addChild(cr);
	app.root.addChild(rc);

}

// eigth
function arcAndline (){
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
	var arcShap = cr.graphics.addComponent('arcShape', {
		type: 'Array',
		property: colorOrPosition
	});

	var lr = new app.Manager(scene);
	var circleShap = lr.graphics.addComponent('lineShape', {
		type: 'Array',
		property: colorOrPosition
	});


	// final
	app.root.addChild(lr);
	app.root.addChild(cr);


}

// ninth
function lineAndcircle (){
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

	var lr = new app.Manager(scene);

	// rebuilt app
	var lineShape = lr.graphics.addComponent('lineShape', {
		type: 'Array',
		property: colorOrPosition
	});
	var sc = new app.Manager(scene);
	var circleShap = sc.graphics.addComponent('circleShape', {
		type: 'Array',
		property: colorOrPosition
	});


	// final
	app.root.addChild(sc);
	app.root.addChild(lr);


}