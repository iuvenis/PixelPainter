var canvasGrid = document.getElementById('canvasGrid');
var colorGrid = document.getElementById('colorGrid');
var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'black', 'orange', 'gray', 'brown'];

function colorPalette () {

  for (var i = 0; i < 10; i++) {
    var colorRow = document.createElement('div');
    colorRow.className = 'colorRow';
    colorRow.id = i;

    colorGrid.appendChild(colorRow);
  } 

  for (var x = 0; x < colors.length; x++) {
    var colorBlock = document.getElementById(x)
    colorBlock.style.backgroundColor = colors[x];
  }
}

function canvasMaker() {

  for (var i = 0; i < 10; i++) {

    var row = document.createElement('div');
    row.className = 'row';
    // row.id = 'row';

    for (var k = 0; k < 20; k++) {
      var block = document.createElement('div');
      block.className = 'block';
      // block.id='block';
      row.appendChild(block);
    }
   
    canvasGrid.appendChild(row);
  }
}

colorPalette();
canvasMaker();