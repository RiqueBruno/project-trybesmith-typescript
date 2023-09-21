import { Order } from '../../src/types/Order';

const inputOrderList: Order[] = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [{ "id": 1 }, { "id": 2 }]
  },
  {
    "id": 2,
    "userId": 3,
    "productIds": [{ "id": 3 }, { "id": 4 }]
  }
]

const orderListResponse: Order[] = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 3,
    "productIds": [3, 4]
  }
]

export default {
  inputOrderList,
  orderListResponse,
}