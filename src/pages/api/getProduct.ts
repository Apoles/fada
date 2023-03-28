import { NextApiRequest, NextApiResponse } from 'next';
import { Productdata } from 'Product';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Productdata);
}
