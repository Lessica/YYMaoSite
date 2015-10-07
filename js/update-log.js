$(document).ready(function(){
	$('.mac, .win').each(function(index, elem){
		var elem = $(elem);
		elem.find('.btn-toggle').on('click', function(){
			if (elem.hasClass('log-visible')){
				elem.removeClass('log-visible');
				elem.addClass('log-invisible');
			} else {
				elem.removeClass('log-invisible');
				elem.addClass('log-visible');
			}
		});
	});
});