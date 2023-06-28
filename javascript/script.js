/*CARROUSEL*/

$(".option").click(
    function(){
        $(".option").removeClass("active");
        $(this).addClass("active");
    }
);

/*CARROUSEL*/

/*VALIDAR FORMULARIO*/

function validarformulario() 
{
    var email = document.getElementById('email').value;

    if (email.trin() === "") {
        alert ("Por favor ingresa tu email");
        return false;
    }

    var mensaje = "Los datos ingresados son /.email";

    alert (mensaje);
    
    return true;
};

/*VALIDAR FORMULARIO*/