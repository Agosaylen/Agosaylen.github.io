/* Hacemos que el botón de desplegable pueda abrir y cerrar el menú cuando se haga clic en él */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

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