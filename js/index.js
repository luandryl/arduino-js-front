window.onload = function(){
	//chama o loop de verificacao de dispositivo connectado
	verficarEstadoDispositivo();
	verificar();
}


var ligar = function(){
	$("#status").removeClass( "desligado" ).addClass( "ligado" );
	$("#on").css("display","none");
	$("#off").css("display","block");
};

var desligar = function(){
	$("#status").removeClass( "ligado" ).addClass( "desligado" );
	$("#on").css("display","block");
	$("#off").css("display","none");
};

var verificar = function(){
	//requisicao POST
	$.get( "https://rolinhas-project.herokuapp.com/web", { })
  		.done(function( data ) {
   		    console.log(data);
   		    $("#aplicacao").css("display","block");
   		    $("#erro").css("display","none");
   		    if(data){
   		    	ligar();
   		    	console.log("estava ligado");
   		    }else{
   		    	desligar();
   		    	console.log("estava desligado");
   		    }

	  	}).fail(function(data) {
	  		$("#aplicacao").css("display","none");
	  		$("#erro").css("display","block");
	  		console.log("erro ao acessar o servidor ");
	  	});
};

var verficarEstadoDispositivo = function(){
	//verifica o estado do dispositivo 
	$.get( "https://rolinhas-project.herokuapp.com/dispositivo", { })
  		.done(function( data ) {
   		    console.log(data);
   		    $("#erro").css("display","none");
   		    $("#aplicacao").css("display","block");
   		    verificar();
   		    //verifica novamente apos 1000 ms
   		    setTimeout(function(){
   		    	verficarEstadoDispositivo();
   		    }, 1000);
	
	  		
	  	}).fail(function(data) {
	  		$("#erro").css("display","block");
   		    $("#aplicacao").css("display","none");
	  		//verifica novamente
	  		//verifica novamente apos 1000 ms
   		    setTimeout(function(){
   		    	verficarEstadoDispositivo();
   		    }, 1000);
	});
};

var post = function(){
	//requisicao POST
	$.post( "https://rolinhas-project.herokuapp.com/", { })
  		.done(function( data ) {
   		    console.log(data);
	  	}).fail(function(data) {
	  		console.log("erro");
	});
};
