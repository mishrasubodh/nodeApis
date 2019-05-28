const express = require('express');
const path = require ('path')

const rootDir = require('../util/path');


const router = express.Router();


// /admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    console.log("come here ")
    res.sendfile(path.join(rootDir,'views','add-product.html'));
});

// /admin/add-product => GET
router.post('/product',(req,res,next)=>{
    console.log("here is also comre");
  console.log(req.body);
    res.redirect('/');
});

module.exports = router;