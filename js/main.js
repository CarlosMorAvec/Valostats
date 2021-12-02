//Carrusel inicio Pase de Batalla
var imagenes = ['./img/vacio.png', './img/vacio.png', './img/pase-1.jpg', './img/pase-2.jpg', './img/pase-3.jpg', './img/pase-4.jpg', './img/pase-5.jpg',
'./img/pase-1.jpg', './img/pase-2.jpg', './img/pase-3.jpg', './img/pase-4.jpg', './img/pase-5.jpg', './img/pase-1.jpg', './img/pase-2.jpg',
'./img/pase-3.jpg', './img/pase-4.jpg', './img/pase-5.jpg', './img/pase-1.jpg', './img/pase-2.jpg', './img/pase-3.jpg', './img/pase-4.jpg',
'./img/pase-5.jpg', './img/vacio.png', './img/vacio.png']; //Almacenamos las imagenes del carrusel de Pase de Batalla
var nombres = ['', '', 'Classic Goldwig', 'Llavero Goldwig', '10 puntos Radianita', 'Graffiti Goldwig', 'Bulldog Goldwig',
'Classic Goldwig', 'Llavero Goldwig', '10 puntos Radianita', 'Graffiti Goldwig', 'Bulldog Goldwig', 'Classic Goldwig', 'Llavero Goldwig',
'10 puntos Radianita', 'Graffiti Goldwig', 'Bulldog Goldwig', 'Classic Goldwig', 'Llavero Goldwig', '10 puntos Radianita', 'Graffiti Goldwig',
'Bulldog Goldwig', '', '']
var pos = 0;


function carrusel(contenedor){
    contenedor.addEventListener("click", e =>{
        let retroceder = contenedor.querySelector('#retroceder');
        let avanzar = contenedor.querySelector('#adelantar');
        let img1 = contenedor.querySelector('#imagen1');
        let img2 = contenedor.querySelector('#imagen2');
        let img3 = contenedor.querySelector('#imagen3');
        let img4 = contenedor.querySelector('#imagen4');
        let img5 = contenedor.querySelector('#imagen5');
        let seleccion = e.target;

        if(seleccion ==  retroceder){
            if(pos > 0){
                img1.src = imagenes[pos - 1];
                img2.src = imagenes[pos ];
                img3.src = imagenes[pos +1];
                img4.src = imagenes[pos +2];
                img5.src = imagenes[pos +3];
                pos --;
            }else{
                img1.src = imagenes[0];
                img2.src = imagenes[1];
                img3.src = imagenes[2];
                img4.src = imagenes[3];
                img5.src = imagenes[4];
            }
        }else if(seleccion == avanzar){
            if(pos +4 < imagenes.length - 1){
                img1.src = imagenes[pos + 1];
                img2.src = imagenes[pos + 2];
                img3.src = imagenes[pos + 3];
                img4.src = imagenes[pos + 4];
                img5.src = imagenes[pos + 5];
                pos ++;
            }else{
                img1.src = imagenes[imagenes.length - 5];
                img2.src = imagenes[imagenes.length - 4];
                img3.src = imagenes[imagenes.length - 3];
                img4.src = imagenes[imagenes.length - 2];
                img5.src = imagenes[imagenes.length - 1];
            }
        }
    });

}

document.addEventListener("DOMContentLoaded",() =>{
    let contenedor = document.querySelector('.carrusel');
    carrusel(contenedor);
});

