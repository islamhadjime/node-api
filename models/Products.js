const {Model,Sequelize } = require("sequelize");
const sequelize          = require("./db");
const Category           = require("./Category");

class Products extends Model {};


Products.init({
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  price:{
    type: Sequelize.INTEGER,
    allowNull:false
  }
},{
  sequelize,
  timestamps: false,
  modelName:'products'
})


Category.hasOne(Products,{
  onDelete: "cascade",
  foreignKey:{name:"category_product"}
})
module.exports = Products
