import express from 'express';
import products from './data/products.js';
import morgan from 'morgan';

import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(morgan('tiny'));

 


app.get('/', (req, res) => {
    res.send('Api is running');
});


app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product =  products.find(product => product._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on porttt ${PORT}`);
})