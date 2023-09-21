import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const setProducts = async (req: Request, res: Response): Promise<void> => {
  const { name, price, orderId } = req.body;
  const { status, data } = await productsService.setProducts({ name, price, orderId });
  res.status(mapStatusHTTP(status)).json(data);
};

export default {
  setProducts,
};