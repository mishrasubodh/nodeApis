
 const express= require('express');
 const app = express();
 const path = require('path')
const bodyParser = require('body-parser');
const adminroutes  = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminroutes);
app.use(shopRoutes);


app.use((req,res,next) => {
res.status(404).sendfile(path.join(__dirname,'views','404.html'));
});
 app.listen(5000,()=>{
console.log('server is running on port no 5000')
 });