import ProductSchema from "../utils/product";

const ProductModel = require("../models/product");

exports.createProduct = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.category ||
    !req.body.price ||
    !req.body.size ||
    !req.body.color
  ) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const product = new ProductModel({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    size: req.body.size,
    color: req.body.color,
  });

  await product
    .save()
    .then((data: ProductSchema) => {
      res.send({
        message: "Product created successfully",
        product: data,
      });
    })
    .catch((err) => {
      res.send({
        message: err.message || "Some error occured whilte creating product",
      });
    });
};

exports.getAll = async (req, res) => {
  try {
    const products = await ProductModel.find();
    if (!products) {
      return res.status(404).send({ message: "Products not found" });
    }

    res.status(200).json(products);
  } catch (err) {
    return res.status(404).json({ messsage: err.message });
  }
};

exports.getOne = async (req, res) => {
  const product_id = req.params.id;
  if (!product_id) {
    return res.status(404).send({ message: "ID not found" });
  }

  try {
    const product = await ProductModel.findById(product_id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
