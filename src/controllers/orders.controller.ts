import { Request, Response } from 'express';
import orderService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await orderService.getAllOrders();
  res.status(mapStatusHTTP(status)).json(data);
};

export default {
  getAllOrders,
};