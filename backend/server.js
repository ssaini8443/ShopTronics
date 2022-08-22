// mongodb+srv://shekhar:shekharadmin@cluster0.rabcw.mongodb.net/shoptronics?retryWrites=true&w=majority

import express from 'express';
import products from './data/products.js';
import morgan from 'morgan';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


import productRoutes from './routes/productRoutes.js';

import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(morgan('tiny'));
connectDB();

 


app.get('/', (req, res) => {
    res.send('Api is running');
});



app.use('/api/products',productRoutes);


app.use(notFound)


app.use(errorHandler);




const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on porttt ${PORT}`);
})