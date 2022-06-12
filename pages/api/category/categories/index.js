import dbConnect from '../../../../utils/mongo';
import Category from '../../../../models/Category';

export default async function handler(req, res) {
  const { method, query: { cat }} = req;

  

  dbConnect();

  if (method === "GET") {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  }

}