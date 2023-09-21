import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const userLogin = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await loginService.userLogin(req.body);
  res.status(mapStatusHTTP(status)).json(data);
};

export default { userLogin };