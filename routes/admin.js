const express = require('express');

const router = express.request();

app.router('/add-product',(req,res,next)=>{
    console.log("come here ")
    res.send('<form action="/product" method="POST"><input type ="text" name="title"><button type="submit">add product</button></form>');
});

app.router('/product',(req,res,next)=>{
    console.log("here is also comre");
  console.log(req.body);
    res.redirect('/');
});

module.exports = router;