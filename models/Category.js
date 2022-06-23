const {Model,Sequelize } = require("sequelize");
const sequelize          = require("./db");


class Category extends Model {};


Category.init({
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
  },
  title:{
    type:Sequelize.STRING,
    allowNull:false
  }


},{
   sequelize,
   timestamps: false,
   modelName:'category'
 })

module.exports = Category
