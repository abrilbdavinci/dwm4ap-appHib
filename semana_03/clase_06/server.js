//import chalk from "chalk";
const chalk = require("chalk");
const express = require("express");
const Product = require('./Product')
const port = 4444;
const app = express();

const modelProduct = new Product();

const home = (request, response)=>{
    console.log(chalk.red('Se accedió a la home'))
    response.send('HOLA DESDE EXPRESS')
}

console.log(chalk.green(" Hola!"));

app.listen(port, () => {
  console.log(chalk.bgGreen("API REST"));
    console.log(`Servidor en el puerto ${port}`)
  
});

app.get('/', home)
app.get('/contactos', (request, response)=>{
    console.log(chalk.blue('Estas en /contactos'))
    response.send('<h1>HOLA DESDE CONTACTOS</h1>')
})

app.get('/productos', async (request, response)=>{
    const lista = await modelProduct.getProducts()
    console.log(lista)
    response.send(lista)
})

app.get('/productos/:id', async (request, response)=>{
    const id = request.params.id;
    console.log(id)
    response.json({id})
})


//hacer con getProductsById()