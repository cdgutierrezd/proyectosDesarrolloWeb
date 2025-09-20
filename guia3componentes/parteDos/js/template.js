
const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", price:"350", img:"img/C30-1-1.jpeg"},
    { titulo: "Mouse", desc: "Inalámbrico", price:"25", img:"img/C30-1-1.jpeg"},
    { titulo: "Empanada", desc: "Diabetica", price:"78", img:"img/C30-1-1.jpeg"},
    { titulo: "Silla", desc: "Gamer", price:"7", img:"img/C30-1-1.jpeg"},
    { titulo: "Celular", desc: "Sin datos", price:"75", img:"img/C30-1-1.jpeg"}
];

productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".price").textContent = `$${p.price}`;
    clon.querySelector(".img").src= p.img;
    contenedor.appendChild(clon);
});
