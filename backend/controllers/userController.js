import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import argon2 from "argon2";

export const get = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: Product,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const create = async (req, res) => {
  const { name, password, role } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ msg: "user berhasil ditambahkan" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const update = async (req, res) => {
  const { name, password, role } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    await User.update(
      {
        name: name,
        password: hashPassword,
        role: role,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "user berhasil diupdate" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "user berhasil dihapus" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
