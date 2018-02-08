//Udacity Project - Jose Carlos Soto
// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function cleanGrid(pixelCanvas){
	if (pixelCanvas.children().length) {
		pixelCanvas.empty();
	}
}

function makeGrid(width, height) {
	let pixelCanvas, grid;
	pixelCanvas = $('#pixelCanvas');

	//Clean the Grid
	cleanGrid(pixelCanvas);

	//Populating the <table> component
	for(let i = 0; i < height; i++) {
		grid += "<tr>";
		for (let j = 0; j < width; j++) {
			grid += "<td></td>";
		}
		grid += "</tr>";
	}
	//Add standard style
	pixelCanvas.html(grid);
	pixelCanvas.css('background-color', '#ffffff');
	pixelCanvas.css('border', '1px solid black');
}

$(document).ready(function(){
	//Activating "Submit" button and calling makegrid()
	$('#inputSubmit').click(function(evt) {
		let height, width;
		width = $('#inputWidth').val();
		height = $('#inputHeight').val();
		evt.preventDefault();
		makeGrid(width, height);
	});

	//Target Pixel Paint 
	$('#pixelCanvas').click(function(evt) {
		let color = $('#colorPicker').val();
		$(evt.target).css('background-color', color);
	});
});