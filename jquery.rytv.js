$.fn.rytv = function(options) {
    var opts = $.extend( {}, $.fn.rytv.defaults, options );
 	var size = (opts.size.split(':')[1] / opts.size.split(':')[0]) * 100;
 	$(this).wrap('<div style="position: relative;padding-bottom: ' + size + '%;padding-top: 30px;height: 0;overflow: hidden;"></div>');
	$(this).css({
		'position': 'absolute',
		'top': 0,
		'left': 0,
		'width': '100%',
		'height': 100%,
	});
};

$.fn.rytv.defaults = {
    size: '16:9'
};
