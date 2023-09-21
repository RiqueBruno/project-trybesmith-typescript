import { ProductInputtableTypes } from '../../src/database/models/product.model';
import { Product } from '../../src/types/Product';

const validProduct: ProductInputtableTypes = {
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 4
};

const validProductDB: Product = {
    id: 1,
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 4
}

const emptyProductName: ProductInputtableTypes = {
    id: 1,
    name: "",
    price: "30 peças de ouro",
    orderId: 4
};

export default {
    validTransactionBody: validProduct,
    validTransactionDB: validProductDB,
    emptyNameTransaction: emptyProductName
};