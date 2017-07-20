//Elementos a traducir
var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];

//Función que traduce el econtenido de los elementos
function translate() {
	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
}
translate();

//Función que muestra los datos ingresados al formulario
function mostrarDatos() {
	if((email.value != "") && (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) && (password.value != "")) {
		var html = "<div class='form-signin submit-info'>";
		html += "<h3>Datos de formulario</h3>";
		html += "<p>El correo electrónico ingresado es: <b>" + email.value + "</b></p>";
		html += "<p>La contraseña ingresada es: <b>" + password.value + "</b></p>";
		html += "</div>";

		var div = document.getElementById("mostrarDatos");
		div.innerHTML = html;	
	} else {
		alert("Su email y/o contraseña no son válidos");
	}
	clear();
}

//Función que limpia los campos
function clear() {
	email.value = "";
	password.value = "";
}
       