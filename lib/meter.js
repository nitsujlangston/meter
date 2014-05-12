var conns = {};

module.exports = function(options){
	options = options || {};
	options.rate = options.rate || 25;
	return function(req, res, next){
		conns[req.ip] = conns[req.ip] ? conns[req.ip] + 1 : 1;
		setTimeout(function(){
			conns[req.ip] = conns[req.ip] - 1;
			if (conns[req.ip] === 0){
				delete conns[req.ip];
			}
		}, 1000/options.rate);
		if (conns[req.ip] > options.max){
			res.send(429);
		} else {
			next();
		}
	}
};