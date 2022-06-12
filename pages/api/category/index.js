import Post from "../../../models/Post";
import dbConnect from '../../../utils/mongo';
import Category from '../../../models/Category';

export default async function handler(req, res) {
  const { method, query: { cat }} = req;

  

  dbConnect();

  if (method === "GET") {
    try {
      const posts = await Post.find({ category: {
        $in: [cat]
    }});
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }

}