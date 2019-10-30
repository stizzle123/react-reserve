// import products from "../../static/products.json";
import Product from "../../models/Product";
import connectDb from "../../utils/connectDb.js";

connectDb();

export default async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    return res.send(error);
  }
};
