'use strict'

const grande  = document.querySelector('.grande')
const punto   = document.querySelectorAll('.punto')

punto.forEach ( ( cadaPunto , i ) => {
    punto[i].addEventListener('click',()=>{
        
        let posicion = i
        let operacion = posicion * -50

        grande.getElementsByClassName.transform =  `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
         })
        punto[i].classList.add('activo')
    })
})
        
/*BARRA DE NAVEGACION*/

window.addEventListener("scroll", function(){
    var menu = document.getElementById("menu")
    if (window.scrollY>0) {
        menu.style.paddingTop="20px";
        menu.style.transition="0.4s";
    }else{
        menu.style.paddingTop="48px";
    }
})

/*BARRA DE NAVEGACION*/