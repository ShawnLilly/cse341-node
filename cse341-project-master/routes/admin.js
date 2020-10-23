const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', 
[
    body('title')
        .isString()
        .isLength({min: 1})
        .trim()
        .withMessage('Error with title.'),
    body('category')
        .isString()
        .isLength({min: 1})
        .trim()
        .withMessage('Error with category.'),
    body('imageUrl')
        .isURL()
        .withMessage('Error with URL.'),
    body('price')
        .isFloat()
        .withMessage('Error with price.'),
    body('description')
        .isLength({min: 1, max: 400})
        .trim()
        .withMessage('Error with description.')
],
isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product',
[
    body('title')
        .isString()
        .isLength({min: 1})
        .trim()
        .withMessage('Error with title.'),
    body('category')
        .isString()
        .isLength({min: 1})
        .trim()
        .withMessage('Error with category.'),
    body('imageUrl')
        .isURL()
        .withMessage('Error with URL.'),
    body('price')
        .isFloat()
        .withMessage('Error with price.'),
    body('description')
        .isLength({min: 1, max: 400})
        .withMessage('Error with description.')
],
isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
