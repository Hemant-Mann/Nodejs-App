var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var vm = {
		title: 'Place an order',
		orderId: req.session.orderId,
		firstName: req.user ? req.user.firstName : null
	};
	res.render('orders/index', vm);
});

module.exports = router;
