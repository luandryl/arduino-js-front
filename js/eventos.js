window.onload = function(){
			verificar();
};

var verificar = function(){
		//requisicao GET
		$.get( "https://rolinhas-project.herokuapp.com/data", {})
				.done(function( data ) {
					$('#tabela > tbody').empty();
				    for(i=data.logs.length -1 ;i>=0;i--){
				    	var acao ="";
				    	if(data.logs[i].state){
				    		acao = "ligar";
				    	}else{
				    		acao = "desligar";
				    	}
				    	$('#tabela > tbody').append("<tr><td>"+acao+"</td><td>"+data.logs[i].date+"</td></tr>");
				    }
				    $("#aplicacao").css("display","block");
	  				$("#erro").css("display","none");
	  				//verifica novamente apos 500 ms
			   		    setTimeout(function(){
			   		    	verificar();
			   		    }, 500);

		  	}).fail(function(data) {
		  		console.log("erro");
		  		$("#aplicacao").css("display","none");
	  			$("#erro").css("display","block");
	  			//verifica novamente apos 500 ms
	   		    setTimeout(function(){
	   		    	verificar();
	   		    }, 500);
		});
};