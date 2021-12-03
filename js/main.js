//Carrusel inicio Pase de Batalla
var imagenes = ['./img/vacio.png', './img/vacio.png', './img/pase-1.jpg', './img/pase-2.jpg', './img/pase-3.jpg', './img/pase-4.jpg', './img/pase-5.jpg',
'./img/pase-1.jpg', './img/pase-2.jpg', './img/pase-3.jpg', './img/pase-4.jpg', './img/pase-5.jpg', './img/pase-1.jpg', './img/pase-2.jpg',
'./img/pase-3.jpg', './img/pase-4.jpg', './img/pase-5.jpg', './img/pase-1.jpg', './img/pase-2.jpg', './img/pase-3.jpg', './img/pase-4.jpg',
'./img/pase-5.jpg', './img/vacio.png', './img/vacio.png']; //Almacenamos las imagenes del carrusel de Pase de Batalla
var nombres = ['Classic Goldwig', 'Llavero Goldwig', '10 puntos Radianita', 'Graffiti Goldwig', 'Bulldog Goldwig',
'Classic Goldwig', 'Llavero Goldwig', '10 puntos Radianita', 'Graffiti Goldwig', 'Bulldog Goldwig', 'Classic Goldwig', 'Llavero Goldwig',
'10 puntos Radianita', 'Graffiti Goldwig', 'Bulldog Goldwig', 'Classic Goldwig', 'Llavero Goldwig', '10 puntos Radianita', 'Graffiti Goldwig',
'Bulldog Goldwig']
var pos = 0;
var rangos = ['','','Rango 1', 'Rango 2', 'Rango 3', 'Rango 4', 'Rango 5',
'Rango 6', 'Rango 7', 'Rango 8', 'Rango 9', 'Rango 10', 'Rango 11', 'Rango 12',
'Rango 13', 'Rango 14', 'Rango 15', 'Rango 15', 'Rango 16', 'Rango 17', 'Rango 18',
'Rango 19','',''];


function carrusel(contenedor){
    contenedor.addEventListener("click", e =>{
        let retroceder = contenedor.querySelector('#retroceder');
        let avanzar = contenedor.querySelector('#adelantar');
        let img1 = contenedor.querySelector('#imagen1');
        let img2 = contenedor.querySelector('#imagen2');
        let img3 = contenedor.querySelector('#imagen3');
        let img4 = contenedor.querySelector('#imagen4');
        let img5 = contenedor.querySelector('#imagen5');
        let span1 = contenedor.querySelector('#span1');
        let span2 = contenedor.querySelector('#span2');
        let span3 = contenedor.querySelector('#span3');
        let span4 = contenedor.querySelector('#span4');
        let span5 = contenedor.querySelector('#span5');
        let nombreObjeto = contenedor.querySelector('.nombre-objeto');
        let seleccion = e.target;

        if(seleccion ==  retroceder){//Pulsa el boton de retroceder
            if(pos > 0){
                nombreObjeto.innerHTML = nombres[pos -1];//Pone el nombre de la imagen que está en el centro
                img1.src = imagenes[pos - 1]; //Mueve las imágenes
                img2.src = imagenes[pos ];
                img3.src = imagenes[pos +1];
                img4.src = imagenes[pos +2];
                img5.src = imagenes[pos +3];
                span1.innerHTML = rangos[pos - 1]; //Mueve los rangos correspondientes
                span2.innerHTML = rangos[pos ];
                span3.innerHTML = rangos[pos +1];
                span4.innerHTML = rangos[pos +2];
                span5.innerHTML = rangos[pos +3];
                pos --;
            }else{//Llega al principio de la lista
                nombreObjeto.innerHTML = nombres[pos];
                img1.src = imagenes[0];
                img2.src = imagenes[1];
                img3.src = imagenes[2];
                img4.src = imagenes[3];
                img5.src = imagenes[4];
                span1.innerHTML = rangos[0];
                span2.innerHTML = rangos[1];
                span3.innerHTML = rangos[2];
                span4.innerHTML = rangos[3];
                span5.innerHTML = rangos[4];
            }
        }else if(seleccion == avanzar){//Al pulsar el boton de avanzar
            if(pos +4 < imagenes.length - 1){
                nombreObjeto.innerHTML = nombres[pos +1];
                img1.src = imagenes[pos + 1];
                img2.src = imagenes[pos + 2];
                img3.src = imagenes[pos + 3];
                img4.src = imagenes[pos + 4];
                img5.src = imagenes[pos + 5];
                span1.innerHTML = rangos[pos + 1];
                span2.innerHTML = rangos[pos + 2];
                span3.innerHTML = rangos[pos + 3];
                span4.innerHTML = rangos[pos + 4];
                span5.innerHTML = rangos[pos + 5];
                pos ++;
            }else{//Llega el límite de la lista
                nombreObjeto.innerHTML = nombres[pos];
                img1.src = imagenes[imagenes.length - 5];
                img2.src = imagenes[imagenes.length - 4];
                img3.src = imagenes[imagenes.length - 3];
                img4.src = imagenes[imagenes.length - 2];
                img5.src = imagenes[imagenes.length - 1];
                span1.innerHTML = rangos[rangos.length - 5];
                span2.innerHTML = rangos[rangos.length - 4];
                span3.innerHTML = rangos[rangos.length - 3];
                span4.innerHTML = rangos[rangos.length - 2];
                span5.innerHTML = rangos[rangos.length - 1];
            }
        }
    });

}
function cuentaRegresiva(){
    let fechaLimite = new Date(2022,0,15,03,00,00,000); 
    let actual = new Date();

    let diferencia = Math.abs(fechaLimite - actual); //Calcula la diferencia y pasamos a dias y horas restantes
    let dias = (diferencia/(1000 * 3600 * 24));
    let horas =((diferencia/(1000 * 3600))%24);

    let spandias = document.querySelector('.dias');
    let spanhoras = document.querySelector('.horas');

    if(diferencia > 0){
        spandias.innerHTML = Math.round(dias);
        spanhoras.innerHTML = Math.round(horas);

    }else{
        spandias.innerHTML = "00";
        spanhoras.innerHTML = "00";
    }

}

document.addEventListener("DOMContentLoaded",() =>{
    let contenedor = document.querySelector('.carrusel-general');
    carrusel(contenedor);
    cuentaRegresiva();
});

setInterval('cuentaRegresiva()',30000);//Se ejecuta cada 5 minutos

