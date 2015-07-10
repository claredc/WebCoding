numGrid = 16;
gridWidth = Math.floor(960/numGrid) - 2;

$(document).ready(function() {
	initialGrid('blue');

	$('#newGrid').click(function() {
		if (confirm("Do you want to create a new grid?")) 
		{
			$('tr').remove();
			numGrid = prompt("Enter the number of grid per row/colomn");
			gridWidth = Math.floor(960/numGrid) - 2;
			initialGrid('blue');
		};
	});

	$('#colorRandom').click(function() {
		$('tr').remove();
		initialGrid(randomColor);
	});

});

function initialGrid(color) {
	//Create grid using table
	for (var i = 0; i < numGrid; i++) {
		$('#table').append('<tr></tr>');
	};
	$('#table tr').each(function() {
		for (var i = 0; i < numGrid; i++) {
			$(this).append('<td><div class="square"></div></td>');
		};		
	});
	//Set square style
	$('.square').css({
		width: gridWidth +'px',
		height: gridWidth +'px',
		border: '1px solid #f0f0f0',
		margin:'0px',
		padding: '0px'
	});
	//Hover effect
	$('td > div').hover(
		function() { $(this).css('background-color',color)}
	);

};
function randomColor () {
	// body...
	var option = '0123456789ABCDEF'.split('');
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += option[Math.round(Math.random() * 15)];
	};
	return color;
}