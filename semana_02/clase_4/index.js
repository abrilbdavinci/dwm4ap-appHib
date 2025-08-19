const Product = require('./Product');

const model = new Product();
// console.log('inicio promesa');

// model.getProducts().then(lista =>{
//     console.table(lista)
// })
// console.log('fin promesa');

async function buscar(id){
    const product = await model.getProductById(id);
    console.log(product);

}
buscar('c3da0a35-0997-484f-b713-45172b8a9f46')

// model.addProduct ( {
//     name: 'Teclado dos',
//     description: 'Teclado Mecánico',
//     price: 25000,
//     stock: 25
// });
// /* 
// model.addProduct ( {
//     name: 'Mouse',
//     description: 'Mouse',
//     price: 15000,
//     stock: 20
// }); */
// model.readJSON();