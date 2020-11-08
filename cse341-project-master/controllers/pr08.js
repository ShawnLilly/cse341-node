const Product = require('../models/product');

const fs = require('fs');
const path = require('path');

const ITEMS_PER_PAGE = 10;

exports.getIndex = (req, res, next) => {
  const page = +req.query.page || 1;
  let totalItems;
 
  Product.find()
    .countDocuments() 
    .then(numProducts => {
      totalItems = numProducts;
      console.log(totalItems)
      return Product.find()
        .skip((page - 1) * ITEMS_PER_PAGE) 
        .limit(ITEMS_PER_PAGE);
    }) 
    .then(products => {
      res.render('pages/Prove08/prove08', {
        prods: products,
        pageTitle: 'Shop', 
        path: 'prove08',
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
      });
    })
    .catch();
};