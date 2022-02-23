//--------funciones materialize
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});    


  
document.addEventListener('DOMContentLoaded', () =>{
    const elementCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementCarousel, {
        duration: 1000,
        shif: 5,
        padding: 5,
        indicators: true,

    });
})
//--------fin funciones materialize

//--------funcion que escribe

let parrafo = document.getElementById('animacion');
let servicio = [' Landingpage ', ' Blog ', ' Website '];
let servis = 0;

const maquinaEscribir=(text='', tiempo = 20, etiqueta='')=>{
    let arrayCaracteres = text.split('');
    etiqueta.innerHTML = '';
    let cont=0;
    let escribir = setInterval(function () {
        etiqueta.innerHTML += arrayCaracteres[cont];
        cont++;
        if (cont === arrayCaracteres.length) {
            clearInterval(escribir);
            servis++;
            
            if(servis == 1){
                maquinaEscribir(servicio[1], 300, parrafo)
            }
            if(servis == 2){
                maquinaEscribir(servicio[2], 300, parrafo)
            }
        }
    }, tiempo)
}

maquinaEscribir(servicio[0], 200, parrafo);
//--------fin funcion que escribe












