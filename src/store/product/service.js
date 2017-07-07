const AV = require('./../../../static/libs/av.js');

export default {
	queryProducts(cb){
		const query = new AV.Query('Products');
		query.find().then(function(results) {
			cb(results);
		});
	}
}