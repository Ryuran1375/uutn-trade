const products = require('../models/products');


exports.getAllproduct = async (req, res) => {
    try {
      const products = await products.find();
      res.json(products
      ); // Aplicamos el método showData para cada término
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.createProducts = async (req, res) => {
    const { name, description, price, image, stock } = req.body;

    try {
        const products = new Products({
            name: name,
            description: description,
            price: price,
            image: image, // Este campo es opcional, puede ser omitido si no se envía
            stock: stock
        });

        const newProducts = await products.save();
        res.status(201).json(newProducts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};