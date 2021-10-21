alert(" Hola");
function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "Usuario1" && Contraseña == "123456")
			{
				alert("¡Usuario y contraseña correctos!");
				window.open("PesoGalactico.html");
			}
			else
			{
				alert("Verifique sus datos por favor :)");
			}
		}