require('dotenv').config();
const mongoose = require('mongoose');
const employeeSchema = require('./models/employee');
const productSchema = require('./models/product');


const employeesConnection = mongoose.createConnection(process.env.EMPLOYEES_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
employeesConnection.once('open', () => {
  console.log('Connected to employees_db');
});
const Employee = employeesConnection.model('Employee', employeeSchema);


const productsConnection = mongoose.createConnection(process.env.PRODUCTS_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
productsConnection.once('open', () => {
  console.log('Connected to products_db');
});
const Product = productsConnection.model('Product', productSchema);

module.exports = { Employee, Product }; 