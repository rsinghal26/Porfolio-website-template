$(document).ready(function(){

//################ navbar hide #############################

	$(window).scroll(function() {
	    if ($(document).scrollTop() > 200) {
	        $('.nav').addClass("hidden");
	    } else {
	        $('.nav').removeClass("hidden");
	    }
	});

//################ typing effect #############################
	function erasing_text_1(letter) {
            var string = letter;	
			var count = letter.length;
			function erase(){

				if(count == 0){
					clearInterval(time);
					typing_text_2();
				}else{
					letter = string.substr(0,count)
					count--;
					$("#developer").html(letter);
				}	
			}

			var time = setInterval(erase,80);
		}	


	function erasing_text_2(letter) {
            var string = letter;	
			var count = letter.length;
			function erase(){

				if(count == 0){
					clearInterval(time);
					typing_text();
				}else{
					letter = string.substr(0,count)
					count--;
					$("#developer").html(letter);
				}	
			}

			var time = setInterval(erase,80);
		}	
	

	function typing_text() {
            	
			var string = " DEVELOPER";
			var length = 11;
			var letter = "";
			var count = 1;
			function type(){

				if(count == length){
					clearInterval(time);
					erasing_text_1(letter);
					
				}else{
					letter = string.substr(0,count)
					count++;
					$("#developer").html(letter);
				}	
			}

			var time = setInterval(type,200);
		}	


	function typing_text_2() {
            	
			var string = " DESIGNER";
			var length = 10;
			var letter = "";
			var count = 1;
			function type(){

				if(count == length){
					clearInterval(time);
					erasing_text_2(letter);
				}else{
					letter = string.substr(0,count)
					count++;
					$("#developer").html(letter);
				}	
			}

			var time = setInterval(type,200);
		}			
     
 
	typing_text();






	function cursor(){

		$("#cursor").animate({
			opacity: 1,
		},'fast','swing').animate({
			opacity: 0,
		},'fast','swing')
	}

	setInterval(cursor,600);

//#################### skills animations ############################	



	var eventFired = false,
    objectPositionTop = ($('#skills').offset().top - 300);
    
	$(window).on('scroll', function() {

 		var currentPosition = $(document).scrollTop();
 		if (currentPosition > objectPositionTop && eventFired === false) {
  			 eventFired = true;

    		$('.progress-bar').each(function() {

      			$(this).animate({
        
        			width: $(this).data('percent') + '%'
      			}, 2000);
    		});
    	}
   }); 		
  		
//#################### navbar button scroll ############################	

	$(".page_scroll").click(function(){

		$('html,body').animate({

			scrollTop: $($(this).attr('href')).offset().top

		},'slow');
	})


//############## scroll button ##################################	


	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	        document.getElementById("fix_button").style.display = "block";
	    } else {
	        document.getElementById("fix_button").style.display = "none";
	    }
	}

	$("#fix_button").click(function(){

		$('html,body').animate({

			scrollTop: 0

		},'slow');
	});

//##################### Form ###########################	



	$("form").submit(function(e){

		var error = ""
		if( $("#email").val() == "" ){

			error += "Email is requied."
		}
		else if( $("#subject").val() == ""){

			error += "Name is requied."
		}
		else if($("#message").val() == ""){

			error += "Message field is empty"
		}

		if(error != ""){
                  
            $("#error").html('<div class="alert alert-danger" role="alert">' + error + '</div>');      
            return false;
                  
        } else {
       	
	    	return true;
                  
        }
		

	})

  	//##################### scrolling div animations ###########################

  	$(document).ready(function() {
        $('.post').addClass("hidden-2").viewportChecker({
            classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
            offset: 100    
           });  

         $('.post-2').addClass("hidden-2").viewportChecker({
            classToAdd: 'visible animated fadeInRightBig', // Class to add to the elements when they are visible
            offset: 100    
           });      
    });     
	

  	$("#box").click(function(){

  		$("html,body").animate({

  			scrollTop: $(this).scrollTop() + 500
  			},"slow")

  	})

});








