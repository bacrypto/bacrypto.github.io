(function($){
	
	$(".has-offerings").on("click", function(e){
		e.preventDefault();
		$(this).siblings(".offerings-list").toggleClass("hide");
	});
})(jQuery);