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