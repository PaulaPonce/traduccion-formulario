function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
}

translate();

function mostrarDatos() {
	var ie = document.getElementById("inputEmail");
	var ip = document.getElementById("inputPassword");
	document.write("El correo electrónico ingresado es:<br>" + ie.value + "<br><br>");
	document.write("La clave ingresada es:<br>" + ip.value);
}
