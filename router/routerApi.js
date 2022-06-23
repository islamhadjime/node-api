
const express    = require('express');
const routes     = express.Router()
const Products   = require('../models/Products.js')
const Category   = require('../models/Category.js')

//  ============== Категория ================== //
routes.post("/category",async (req,res)=>{
 if(!req.body) return res.sendStatus(400);
 await Category.create(req.body)
 res.json("Категория сохранено")
})

routes.get('/category',async (req,res)=>{
  const requesteId = req.params.id;
  const category = await Category.findAll();
  res.json(category)
})

routes.get('/category/filter/:id',async (req,res)=>{
  const requesteId = req.params.id;
  // * Фильтрация элементов по категориям *
  const products = await Products.findOne({
    where:{
      category_product:requesteId
    }
  })
  res.json(products)
})



routes.delete('/category/:id',async (req,res)=>{
    const requesteId = req.params.id;
    await Category.destroy({ where:{id:requesteId}})
    res.send("Данные удалены")
})


//  ============== Продукт ================== //
routes.post("/products",async (req,res)=>{
  if(!req.body) return res.sendStatus(400);
  await Products.create(req.body)
  res.send(`Данные сохранены  ${req.body}`)
})


routes.get("/products",async (req,res)=>{
  const list = await Products.findAll()
  res.json(list)
})

routes.get('/products/:id',async (req,res)=>{
  const requesteId = req.params.id;
  const products = await Products.findOne({ where: { id: requesteId}});
  res.json(products)
})

routes.put('/products/:id',async (req,res)=>{
  if(!req.body) return res.sendStatus(400);
  const requesteId = req.params.id;
  const products = await Products.findOne({ where: { id: requesteId}});
  products.name = req.body.name;
  products.price = req.body.price;
  await products.save()
  res.send("Изменения успешно сохранены")
})

routes.delete('/products/:id',async (req,res)=>{
    const requesteId = req.params.id;
    await Products.destroy({ where:{id:requesteId}})
    res.send("Данные удалены")
})

module.exports = routes
