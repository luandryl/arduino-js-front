window.onload = function(){
	//simula o arduino fazendo as requisicoes
	verificar();

};

var ligar = function(){
	$("#status").removeClass( "desligado" ).addClass( "ligado" );
};

var desligar = function(){
	$("#status").removeClass( "ligado" ).addClass( "desligado" );

};

var verificar = function(){
	//requisicao POST
	$.get( "https://rolinhas-project.herokuapp.com/arduino", {})
  		.done(function( data ) {
   		    console.log(data);
   		    $("#aplicacao").css("display","block");
   		    $("#erro").css("display","none");

   		    if(data){
   		    	ligar();
   		    }else{
   		    	desligar();
   		    }

   		    //verifica novamente apos 500 ms
   		    setTimeout(function(){
   		    	verificar();
   		    }, 500);

	  	}).fail(function(data) {
	  		$("#aplicacao").css("display","none");
	  		$("#erro").css("display","block");
	  		console.log("erro ao acessar o servidor ");
	  		//verifica novamente apos 500 ms
   		    setTimeout(function(){
   		    	verificar();
   		    }, 500);
	});
};
