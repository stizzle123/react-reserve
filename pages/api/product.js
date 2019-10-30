import Product from "../../models/Product";

export default async (req, res) => {
  try {
    const { _id } = req.query;
    const product = await Product.findById({ _id });
    res.status(200).json(product);
  } catch (error) {
    return res.json(error);
  }
};
