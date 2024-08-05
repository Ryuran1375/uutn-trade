const categories = require('../models/categories');

exports.getAllcategories = async (req, res) => {
    try {
      const categories = await categories.find();
      res.json(categories
      ); // Aplicamos el método showData para cada término
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  