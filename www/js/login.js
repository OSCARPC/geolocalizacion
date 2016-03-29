
$('#formulario').submit(function() { 
	
	 
	// recolecta los valores que inserto el usuario
	var datosUsuario = $("#latitud").val()
	var datosPassword = $("#longitud").val()
	
  	archivoValidacion = "http://testing.eduguiatacc.org/validacion_de_datos.php?jsoncallback=?"

	$.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
	.done(function(respuestaServer) {
		
		alert(respuestaServer.mensaje + "\nGenerado en: " + respuestaServer.hora + "\n" +respuestaServer.generador)
		
		if(respuestaServer.validacion == "ok"){
		  
		 	/// si la validacion es correcta, muestra la pantalla "home"
			$.mobile.changePage("#principal")
		  
		}else{
		  
		  /// ejecutar una conducta cuando la validacion falla
		}
  
	})
	return false;
})
	
