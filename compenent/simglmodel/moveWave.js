var t = 0;
function moveWave (){
		var shape_wave = new s3.Shape();

		var canvas = s3.dom('canvas'),
				can = shape_wave.set(canvas),
				ctx = canvas.getContext('2d');

				can.attr('width').val('960').attr('height').val('500').attr('className').val('bgwhite');

		var width = can.attr("width").val(),
				height = can.attr("height").val(),
				radius = 32;


		var app = shape_wave.tool(ctx);
		var scene = app.scene;
		var getBlock = app.createGradient;
		var getBlock20 = app.createGradient20;
		
		var colorOrPosition = app.amount(1).handleModule(getBlock).map(function(opt) {
			return {
					index:"#5E8579",
					beginPosition : {x:50},
					endPosition : {x:500},
					readyPosition:50,
					opposite:1,
					rate:6,
					hertz:11,
					slope:0.99996,
					speed:0.3,
					x:200,
					y:300
			}
		});


		var _scene = new app.Manager(scene);

		var waveShape = _scene.graphics.addComponent('waveShape', {
				type: 'Array',
				property: colorOrPosition
		});
		
		waveShape.start({speed:0.6});

		clearTimeout(t);
		clearTimeout(mct);

		function sc(){
				t = setTimeout(sc,20);
				app.root.addChild(_scene);
		}
		sc();
}


/*

{
		index:"#5E8579",
		beginPosition : {x:50},
		endPosition : {x:500},
		opposite:1,
		rate:5,
		readyPosition:50,
		sensitivity:10,
		slope:0.99996,
		speed:0.8,
		x:200,
		y:500
}
*/


	// waveShape.start();
	// waveShape.animation('start');
	// app.animation(cr,t); // 只有一个canvas才能使用