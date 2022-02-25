const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const router = require('./routes/users');
app.use('/', router)


app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});