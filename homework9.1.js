$(document).ready(function() {
	function create_blue () {
		for(i = 1; i <= 100; i++) {
		let square = $('<div style="width: 70px; height: 70px; background-color: lightblue; margin: 15px;"></div>');
		document.body.append(square[0]);
		}
	}
	setTimeout(create_blue, 2000);
	function create_purple () {
		$('div').css({
			width: '100px',
			height: '100px',
			backgroundColor: 'purple',
			margin: '15px',
		})
	}
	setTimeout(create_purple, 4000);
	function create_purple_with_numbers () {
	$('div').css({
		fontSize: '32px',
		color: 'blue',
		textAlign: 'center',
		});
	$('div').each(function(n) {
		$(this).append(n + 1);
	});
	}
	setTimeout(create_purple_with_numbers, 6000);
	function change_colors () {
		$('div').each(function(i) {
				if (i <= 6) {
					$(this).css({
						background: 'yellow',
					})				
				}
				if((i + 1) % 3 === 0) {
					if ((i + 1) % 15 === 0) {
						$(this).css({
							 background: 'linear-gradient(to right bottom, transparent 49%, rgb(99, 114, 72) 50%) left / 50.25% 100% no-repeat, linear-gradient(to left bottom, transparent 49%, rgb(99, 114, 72) 50%) right / 50.25% 100% no-repeat',
						})				
					} else {
						$(this).css({
							background: 'red',
							width: '100px',
							height: '100px',
						});
					}
				}
		});

	}
	setTimeout(change_colors, 8000);

	function delete_red () {
		for(let i = ($('div').length - 1); i >= 0; i--) {
        if((i + 1) % 3 === 0) {
            if((i + 1) % 15 === 0) {
            	continue;
            } else {
            	$('div')[i].remove();
            }
        }
	}
}
setTimeout(delete_red, 10000);
});