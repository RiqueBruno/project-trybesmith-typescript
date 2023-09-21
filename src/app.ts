import express from 'express';
import productsRouter from './routes/products.routes';

// start commit

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

export default app;
