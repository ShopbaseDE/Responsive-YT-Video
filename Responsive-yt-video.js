$("*[ytv]").each(function() {
	var size = $(this).attr('ytv-size');
	var frame_size = 0;

	if(size === undefined) {
		size = '16:9';
	}

	if(size === '16:9' || size === '16/9') {
		frame_size = '56.25';
	}
	if(size === '21:9' || size === '21/9') {
		frame_size = '42.85';
	}
	if(size === '4:3' || size === '4/3') {
		frame_size = '75';
	}
	if(size === '1:1' || size === '1/1') {
		frame_size = '1';
	}

	$(this).wrap('<div style="position: relative;padding-bottom: ' + frame_size + '%;padding-top: 30px;height: 0;overflow: hidden;"></div>');
	$(this).css({
		'position': 'absolute',
		'top': 0,
		'left': 0,
		'width': '100%',
		'height': 100%,
	});
})
