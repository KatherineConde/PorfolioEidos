const menuItems= document.querySelectorAll(".menu-item");

menuItems.forEach(function(item){
 item.addEventListener("click",function(e){
     const activeItem=document.querySelector(".active");
     activeItem.classList.remove("active");
     e.target.classList.add("active");
 });

});

// // Boton cambiar texto
// const cambioBtn = document.querySelector("#cambiarfuente");

//  cambioBtn.addEventListener("click",function(){
//    document.body.classList.toggle("cambio-fuente");
//  });

/* Modo oscuro */

let modoOscuro = document.getElementById('modo-oscuro');
console.log(modoOscuro);

modoOscuro.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");
});