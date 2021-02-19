const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ports = process.env.port || 3000;
const authRoutes = require('./Routes/auth');
const errorController = require('./Controllers/error');

app.use(bodyParser.json());




app.use((req,res,next)=> {

res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization');
next();
}
);

app.use('/auth', authRoutes); 

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports,()=> console.log(`listening on port ${ports}`));
