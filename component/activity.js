// this is a s3js bracket
function body(options) {
    this.cache = new Array();
    this.dist = new Array();
    this.bool = false;
    return this.dist.push(options) && this.cache.push(s3.shape) && !this.bool
}
body.prototype.component = function (str, options) {
    var cache = this.cache[0];
    var dist = this.dist[0];
    var tool = cache.call(null).tool(dist);
    var scene = tool.scene;
    var manager = tool.manager;
    var callManager = new manager(scene);
    var addComponent = callManager.graphics.addComponent(str, options);
    addComponent.start({
        speed: 0.9,
        open: true
    });
    tool.root.addChild(callManager);
    tool.render(!this.bool);
    return this
}
body.prototype.set = function (options) {
    var params = [options];
    var shape = this.cache[0]();
    var results = shape.set(this.dist[0]);
    params.reduce(function (b, p) {
        for (var i in p)
            results.attr(i).val(p[i])
    }, [])
}