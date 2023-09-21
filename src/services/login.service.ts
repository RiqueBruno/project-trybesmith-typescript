import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

import { ServiceResponse } from '../types/ServiceResponse';
import tokenGenerator from '../utils/tokenGenerator';
import { Login } from '../types/Login';
import { Token } from '../types/Token';

const userLogin = async (login: Login): Promise<ServiceResponse<Token>> => {
  if (!login.username || !login.password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  const hasUser = await UserModel.findOne({ where: { username: login.username } });
  if (!hasUser || !bcrypt.compareSync(login.password, hasUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = hasUser.dataValues;
  const token = tokenGenerator({ id, username });
  return { status: 'OK', data: { token } };
};

export default {
  userLogin,
};