const Products = require('../models/products');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProducts = async (req, res) => {
  const { name, description, price, image, stock } = req.body;

  try {
    const product = new Products({
      name,
      description,
      price,
      image,
      stock
    });

    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.editProducts = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image, stock } = req.body;

  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      id,
      { name, description, price, image, stock },
      { new: true } 
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProducts = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto borrado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
