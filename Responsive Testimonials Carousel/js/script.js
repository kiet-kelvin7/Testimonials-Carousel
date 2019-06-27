$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:15,
	    animateOut:'slideOutDown',
	    animateIn:'flipInX',
	    touchDrag:false,
	    mouseDrag:false,
	    autoplay:true,
	    nav:false,
	    dots:true,
	    slideTransition:'linear',
	    items: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        938:{
	        	items:1
	        }
	    }
	});

});


