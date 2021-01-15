( function($) {

	$( document ).ready(function() {

			//........................navigation bar..............................
			$(".navbar-nav").on('click', '.nav_li', function(){
				$(".nav_li").removeClass("activation");
				$(this).addClass("activation");
			});


			//navbar-toggle
			$(".navbar-header").on('click', '.navbar-toggle', function(){
				var nav_status=$("#nav_menu").attr('class').split(' ')[2];

				if(nav_status=="show_nav"){
				$(".navbar-nav").removeClass("show_nav");
				}else{
				$(".navbar-nav").addClass("show_nav");	
				}
				
			});


			//....................change nav when while scrolling......................
			function onScroll(event){
			    var scrollPos = $(document).scrollTop();

			    //console.log('SCROLL '+(new Date).getTime());

			    $('.navbar ul li a').removeClass("activation");
			    $('.navbar a').each(function () {
			   
			        var $currLink = $(this);
			        var $refElement = $($currLink.attr("href"));

			        if (!$refElement.length) 
			        	return;

			        if ($refElement.position().top <= scrollPos && ($refElement.position().top + $refElement.height()) > scrollPos) {
			            $currLink.addClass("activation");
			        }
			    });
			}

			 $(document).on("scroll", onScroll);

			//....................make toogle menu responsive......................
			var ww = document.body.clientWidth;

			$(document).ready(function() {
				$(".nav li a").each(function() {
					if ($(this).next().length > 0) {
						$(this).addClass("parent");
					};
				})
				
				$(".toggleMenu").click(function(e) {
					e.preventDefault();
					$(this).toggleClass("active");
					$(".nav").toggle();
				});
				adjustMenu();
			})

			$(window).bind('resize orientationchange', function() {
				ww = document.body.clientWidth;
				adjustMenu();
			});

			var adjustMenu = function() {
				if (ww < 800) {
					$(".toggleMenu").css("display", "inline-block");
					if (!$(".toggleMenu").hasClass("active")) {
						$(".nav").hide();
					} else {
						$(".nav").show();
					}
					$(".nav li").unbind('mouseenter mouseleave');
					$(".nav li a.parent").unbind('click').bind('click', function(e) {
						// must be attached to anchor element to prevent bubbling
						e.preventDefault();
						$(this).parent("li").toggleClass("hover");
					});
				} 
				else if (ww >= 800) {
					$(".toggleMenu").css("display", "none");
					$(".nav").show();
					$(".nav li").removeClass("hover");
					$(".nav li a").unbind('click');
					$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
					 	// must be attached to li so that mouseleave is not triggered when hover over submenu
					 	$(this).toggleClass('hover');
					});
				}
			}
	});
} )( jQuery );


//....................check form fields before submitting..................
    	function set_feedback_form(){
            var name = document.forms["contact_form"]["name"].value;
            var email = document.forms["contact_form"]["email"].value;
            var message = document.forms["contact_form"]["message"].value;
            var reg_mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    if(name==""){
                        document.getElementById("error_message").innerHTML = "* Please fill up you name!";
                        return false;
                    }

                    if(email=="" ||  !email.match(reg_mail)){
                        document.getElementById("error_message").innerHTML = "* Please fill up a valid email!";
                        return false;
                    }

                    if(message==""){
                        document.getElementById("error_message").innerHTML = "* Please write us a message!";
                        return false;
                    }
    	}
    	var person = {
    		firstName: "John",
    	}