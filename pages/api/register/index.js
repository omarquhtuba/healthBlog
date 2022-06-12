import dbConnect from "../../../utils/mongo";
import User from "../../../models/User";
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')


export default async function handler(req, res) {
  const { method} = req;

  

  dbConnect();

  if (method === "GET") {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json('wrong credintials');

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json('wrong credintials');

        const accessToken = jwt.sign(
            {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn: "3d"}
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(500).json(error)
    }
  }

  if (method === "POST") {
    const newUser = new User({
        name : req.body.name,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC)
        .toString(),
        email : req.body.email,
    });
    try {
        const savedUser = await newUser.save();
        if(savedUser){
          const userDoc = savedUser._doc;
          delete userDoc.password;
        }
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
  }
}