import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type PayloadToken = {
  id: number,
  username: string,
};

export default function tokenGenerator(payload: PayloadToken): string {
  const t = jwt.sign(payload, secret);
  return t;
}