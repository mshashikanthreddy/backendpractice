const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct) ; //Here order matters if ex:- products/delete if place after params routes it will not reach as it will take it.

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postcart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
