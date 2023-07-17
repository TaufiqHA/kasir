import Product from "../models/productModel.js";

export const get = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const create = async (req, res) => {
  const { name, size, price, userId } = req.body;
  try {
    await Product.create({
      name: name,
      size: size,
      price: price,
      userId: userId,
    });
    res.status(200).json({ msg: "produk telah ditambahkan" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const update = async (req, res) => {
  const { name, size, price, userId } = req.body;
  try {
    await Product.update(
      {
        name: name,
        size: size,
        price: price,
        userId: userId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "produk berhasil di update" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "produk berhasil dihapus" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
