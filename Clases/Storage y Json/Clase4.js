// JSON

//Para guardar objetos tenemos que hacer JSON.stringify() previamente

const producto1 = { nombre: "Lavarropa", precio: 3000, cantidad: 4}
const producto1JSON = JSON.stringify(producto1);

localStorage.setItem("producto1", producto1JSON);

let producto1DesdeStorage = JSON.parse(localStorage.getItem("Producto1"));

console.log(producto1DesdeStorage);

const articulosEnStock = [
{

id:1,
nombre: "Lavarropa",
precio: 3000,
cantidad: 3
},
{
id:2,    
nombre: "Microondas",
precio: 5000,
cantidad:100
},
{
    id:3,
    nombre: "Jeans",
    precio:20,
    cantidad:20
}
];

const articulosEnStockJson = Json.stringify(articulosEnStock)

localStorage.setItem("producto1, producto1JSON");

let productosEnStockDesdeStorage = JSON.parse(localStorage.getItem("productos"));
console.log(productosEnStockDesdeStorage);

for (const articulo of articulosEnStock){
    localStorage.setItem(articulo.id, JSON.stringify(articulo));
}


/* Pasos para trabajar con objetos junto al Storage
 */

/* Almacenar
1. tomamos el objeto y lo transforamos a Json Json.stringify(objetos)
2. lo guardamos con setItem

obtener */




