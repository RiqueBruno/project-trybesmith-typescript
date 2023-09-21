import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import OrderModel from '../../../src/database/models/order.model';
import OrderMock from '../../mocks/order.mock.tests';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

const { inputOrderList, orderListResponse } = OrderMock;

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Se retorna a lista com as ordens', async function () {
    sinon.stub(OrderModel, 'findAll').resolves(
      inputOrderList
        .map((order) => OrderModel.build(order, {
          include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
        })));

    const response = (await OrderModel.findAll()).map((order) => order.dataValues);
    const { status, body } = await chai.request(app).get('/orders');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(orderListResponse);
      });

});
