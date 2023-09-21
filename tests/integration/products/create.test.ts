import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import ProductModel from '../../../src/database/models/product.model';
import ProductMock from '../../mocks/products.mock.tests';
import app from '../../../src/app'; 

const { validTransactionBody, validTransactionDB, emptyNameTransaction } = ProductMock;

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Se retorna 201 e o produto criado', async function () {
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(validTransactionDB));

    const { status, body } = await chai.request(app).post('/products').send(validTransactionBody);

    expect(status).to.be.equal(201);
    expect(body).to.be.deep.equal(validTransactionDB);
  });

  it('Se retorna erro 400 quando falta um elemento. EX.: Campo name.', async function () {
    const { status, body } = await chai.request(app).post('/products').send(emptyNameTransaction);
    
    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({ message: 'Product data is invalid' });
  });

});
