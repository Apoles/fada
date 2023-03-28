import { NextApiRequest, NextApiResponse } from 'next';
import { Productdata } from 'Product';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { id } = query;
  console.log(id);

  if (id) {
    const dat2 = Productdata.find((e) => e.id.toLowerCase().replace(/[ ]/g, '-') == id);

    console.log(Productdata[0].id.toLowerCase().replace(/[ ]/g, '-') == id);

    res.status(200).json(dat2);
  }

  res.status(404).end();
}
