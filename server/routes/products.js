const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('', (req, res) => {
  Product.find().then((foundProducts) => {
    res.json(foundProducts);
  });
});

router.get('/:productId', (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((foundProduct) => {
      res.json(foundProduct);
    })
    .catch((err) => {
      res.status(422).send({
        errors: [{ title: 'Product error', detail: 'Product not found!' }, err],
      });
    });
});

module.exports = router;
