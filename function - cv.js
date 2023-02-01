 
 /**
  * console.log("Hello world!");

 *let numero1 = 3;
 *let numero2 = 4;
 *let resultado = numero1+numero2;

 console.log("La suma de numero1 y numero2 es:"+resultado);
ESSE CODIGO FOI UM TESTE QUE SO DAR PRA VER NO INSPECIONAR CONSOLE


document.getElementById("botton").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer documento en JS"
}



document.addEventListener("click", function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer documento en JS"
});

*/

document.getElementById("button").addEventListener("click", function(){
    console.log("Lo logré!!!");
    document.getElementById('demo').innerHTML = "Muchas Gracias!!"

    
});

