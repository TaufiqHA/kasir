import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./userModel.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "product",
  {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

User.hasMany(Product);
Product.belongsTo(User);

export default Product;
