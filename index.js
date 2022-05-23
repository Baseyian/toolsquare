const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.static('static'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
























// ********** helpers ********

// controllers

// var crudModel=require('../models/crud-model');
// module.exports={
//  crudForm:function(req, res) {
//     res.render('crud-operation');
// },
// createCrud:function(req,res){
//     const createData=crudModel.createCrud();
//     res.send('<h1>'+createData+'</h1>');
// },
// fetchCrud:function(req,res){
   
//     const fetchData=crudModel.fetchCrud();
//     res.send('<h1>'+fetchData+'</h1>');
    
// },
// editCrud:function(req,res){
//     const editId=req.params.id;
//     const editData= crudModel.editCrud(editId);
//     res.render('crud-operation',{editData:editData,editId:editId});
// },
// UpdateCrud:function(req,res){
//      const updateId=req.params.id;
//      const updateData= crudModel.UpdateCrud(updateId);
//      res.send('<h1>'+updateData+'</h1>');
// },
// deleteCrud:function(req,res){
//     const deleteId=req.params.id;
//     const deleteData= crudModel.deleteCrud(deleteId);
//     res.send('<h1>'+deleteData+'</h1>');
// }
// }



// routes
// var express = require('express');
// var crudController=require('../controllers/crud-controller');
// var router = express.Router();
// // curd form route
// router.get('/form', crudController.crudForm );



// index

// var crudRouter = require('./routes/crud-route');
// app.use('/crud', crudRouter);