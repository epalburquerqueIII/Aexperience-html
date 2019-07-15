$(document).ready(function () {


	var cookie = getCookie("authtoken"); 
	console.log("Lectura de cookie");
	$("#login").value = "Area privada";

	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
		paginationSpeed: 500,
		singleItem: true,
		autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items: 5,
		itemsDesktop: [1199, 5],
		itemsDesktopSmall: [979, 5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items: 5,
		itemsDesktop: [1199, 5],
		itemsDesktopSmall: [979, 5],
	});


	// google map
	var map;

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: -34.397,
				lng: 150.644
			},
			zoom: 8
		});
	}


	// -----------------------------
	//  Count Up
	// -----------------------------
	function counter() {
		var oTop;
		if ($('.counter').length !== 0) {
			oTop = $('.counter').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.counter').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	// -----------------------------
	//  On Scroll
	// -----------------------------
	$(window).on('scroll', function () {
		counter();
	});


	// venobox
	$('.venobox').venobox();

	// Auth
	var token = getCookie("AuthToken");
	console.log("Valor de la cookie " + token.length);
//	if (token != "cookie grabada") {
//		$("#login").attr("href","http://localhost:8080/register");
//		$("#login").text("Area Cliente");
//	}

});

function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}

function getCookie(name){
	var cname = name + "=";               
	var dc = document.cookie;             
	console.log("Datos "+dc.length);
	if (dc.length > 0) {              
	  begin = dc.indexOf(cname);       
	  if (begin != -1) {           
		begin += cname.length;       
		end = dc.indexOf(";", begin);
		if (end == -1) end = dc.length;
		  return unescape(dc.substring(begin, end));
	  } 
	}
	return "";
}		
