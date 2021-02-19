const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ports = process.env.port || 3000;

app.use(bodyParser.json());




app.use((req,res,next)=> {

res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');

}
);


app.listen(ports,()=> console.log(`listening on port ${ports}`));
