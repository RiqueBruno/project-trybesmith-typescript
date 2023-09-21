import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

const getAllOrders = async (): Promise<ServiceResponse<Order[]>> => {
  const allOrders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
  });

  const orders = allOrders.map((order) => order.dataValues);
  const ordersList = orders.map((order) => {
    const productIds = order.productIds?.map((product) => (
      typeof product === 'object' ? product.id : product
    )) || [];
    return { ...order, productIds };
  });

  return { status: 'OK', data: ordersList };
};

export default {
  getAllOrders,
};