import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const setProducts = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  const { name, price, orderId } = product;
  if (!name || !price || !orderId) {
    return { status: 'INVALID_DATA', data: { message: 'Product data is invalid' } };
  }

  const { dataValues } = await ProductModel.create(product);
  return { status: 'CREATED', data: dataValues };
};

const getAllProducts = async (): Promise<ServiceResponse<Product[]>> => {
  const products = await ProductModel.findAll();
  const data = products.map(({ dataValues }) => dataValues);
  return { status: 'OK', data };
};

export default {
  setProducts,
  getAllProducts,
};