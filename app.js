
 const express= require('express');
 const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));


app.use('/add-product',(req,res,next)=>{
    console.log("come here ")
    res.send('<form action="/product" method="POST"><input type ="text" name="title"><button type="submit">add product</button></form>');
});

app.post('/product',(req,res,next)=>{
    console.log("here is also comre");
  console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1> default  is calling</h1>');
});







 app.listen(5000,()=>{
console.log('server is running on port no 5000')
 });