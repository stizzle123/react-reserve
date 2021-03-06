import Product from "../../models/Product";
import Cart from "../../models/Cart";
import Order from "../../models//Order";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    case "DELETE":
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRequest(req, res) {
  try {
    const { _id } = req.query;
    const product = await Product.findById({ _id });
    res.status(200).json(product);
  } catch (err) {
    return res.json(err);
  }
}

async function handlePostRequest(req, res) {
  try {
    const { name, price, description, mediaUrl } = req.body;
    if (!name || !price || !description || !mediaUrl) {
      return res.status(422).send("Product missing one or more fields");
    }
    const data = { name, price, description, mediaUrl };

    const product = await new Product(data).save();

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error in creating product");
  }
}

async function handleDeleteRequest(req, res) {
  try {
    const { _id } = req.query;
    await Product.findByIdAndDelete({ _id });
    await Cart.updateMany(
      { "products.product": _id },
      { $pull: { products: { product: _id } } }
    );
    await Order.updateMany(
      { "products.product": _id },
      { $pull: { products: { product: _id } } }
    );
    res.status(204).json({});
  } catch (err) {
    console.error(err);
    res.status(500).send("Error Deleting product");
  }
}
