import express from "express";

const ProductController = require("../controllers/Product");
const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getOne);

module.exports = router;
