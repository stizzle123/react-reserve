// import products from "../../static/products.json";
import Product from "../../models/Product";
import connectDb from "../../utils/connectDb.js";

connectDb();

export default async (req, res) => {
  try {
    const { page, size } = req.query;
    const pageNum = +page;
    const pageSize = +size;
    let products = [];
    const totalDocs = await Product.countDocuments();
    const totalPages = Math.ceil(totalDocs / pageSize);

    if (pageNum === 1) {
      products = await Product.find().limit(pageSize);
    } else {
      const skips = pageSize * (pageNum - 1);
      products = await Product.find()
        .skip(skips)
        .limit(pageSize);
    }
    res.status(200).json({ products, totalPages });
  } catch (error) {
    return res.status(500).send("Server error in retrieving data");
  }
};
