const express = require('express');
const router = express.Router();
const { Employee, Product } = require('../db');

router.get('/combined', async (req, res) => {
  try {
    const employees = await Employee.find();
    const products = await Product.find();
    res.json({ employees, products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/employee', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.post('/product', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router; 