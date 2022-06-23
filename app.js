const express = require('express');
const sequelize = require('./models/db');

const app = express()
app.use(express.json())


app.use("/api",require('./router/routerApi.js'))



async function main() {
    try{
      await sequelize.sync({force:true})
      app.listen(3000,function() {
        console.log("Сервер ожидает подключения...");
      })
    }catch{
      throw error
    }
}main();
