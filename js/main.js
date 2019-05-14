$(document).ready(function(){


	//Slider

if(window.location.href.indexOf('index') > -1){
 $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
  });
   }


  // Posts


  var posts = [
  		 {

  		 	title: 'Ante la Ley (Kafka)',
  		 	date: new Date(),
  		 	content: '¡Ay! -dijo el ratón-. El mundo se hace cada día más pequeño. Al principio era tan grande que le tenía miedo. Corría y corría y por cierto que me alegraba ver esos muros, a diestra y siniestra, en la distancia. Pero esas paredes se estrechan tan rápido que me encuentro en el último cuarto y ahí en el rincón está la trampa sobre la cual debo pasar.'


  		 },
  		 {
  		 	title: '1984 (Orwell)',
  		 	date: new Date(),
  		 	content: '"-Nosotros, Winston, controlamos la vida en todos sus niveles. Te figuras que existe algo llamado la naturaleza humana, que se irritará por lo que hacemos y se volverá contra nosotros. Pero no olvides que nosotros creamos la naturaleza humana. Los hombres son infinitamente maleables. O quizás hayas vuelto a tu antigua idea de que los proletarios o los esclavos se levantarán contra nosotros y nos derribarán. Desecha esa idea. Están indefensos, como animales. La Humanidad es el Partido. Los otros están fuera, son insignificantes."'


  		 },
  		 {
  		 	title: 'Demian (Hesse)',
  		 	date: new Date(),
  		 	content: '"Las cosas que vemos son las mismas cosas que llevamos en nosotros. No hay más realidad que la que tenemos dentro. Por eso la mayoría de los seres humanos viven tan irrealmente; porque creen que las imágenes exteriores son la realidad y no permiten a su propio mundo interior manifestarse. Se puede ser muy feliz así, pero cuando se conoce lo otro, ya no se puede elegir el camino que elige la mayoría".'

  		 },
  		 {
  		 	title: 'El sur (Borges)',
  		 	date: new Date(),
  		 	content: '"Ahí estaba el gato, dormido. Pidió una taza de café, la endulzó lentamente, la probó (ese placer le había sido vedado en la clínica) y pensó, mientras alisaba el negro pelaje, que aquel contacto era ilusorio y que estaban como separados por un cristal, porque el hombre vive en el tiempo, en la sucesión, y el mágico animal, en la actualidad, en la eternidad del instante."'
  		 },


  ];

  posts.forEach((item, index) => {
  		var post = `
  			<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p> 
					 	${item.content}
					</p>
					
				</article>


  		`;

  			$("#posts").append(post);

  });

  //Selector de tema

  var theme = $("#theme");

  $("#to-green").click(function(){
  	theme.attr("href", "css/green.css");

  });

   $("#to-blue").click(function(){
  	theme.attr("href", "css/vang.css");

  });

    $("#to-pink").click(function(){
  	theme.attr("href", "css/miles.css");

  });

    //Scroll - Ir arriba

    $('.subir').click(function(e){

    	e.preventDefault();

    	$('html, body').animate({

    		scrollTop: 0
    	}, 500);

    	return false;


    }); 

    $("#login form").submit(function(){

    	var form_usuario = $("#form_usuario").val();

    	localStorage.setItem("form_usuario", form_usuario);

    });

    var form_usuario = localStorage.getItem("form_usuario");

    if(form_usuario != null && form_usuario != "undefined"){
    	var about_parrafo = $("#about p");
    	about_parrafo.html("<strong>Bienvenido, "+form_usuario+"</strong>");
    	about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");


    	$("#login").hide();

    	$("#logout").click(function(){

    		localStorage.clear(); 
    		location.reload();
    	});
    }
    


    if(window.location.href.indexOf('about') > -1){

    	$("#acordeon").accordion();




 	}

  //Validar formulario contacto
  if(window.location.href.indexOf('contacto') > -1){

   $("form input[name='date']").datepicker({

      dateFormat: 'dd-mm-yy'
   });
      
   $.validate({
    lang: 'es'
  });

  }



});