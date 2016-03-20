var canvasGrid = document.getElementById('canvasGrid');
var colorGrid  = document.getElementById('colorGrid');
var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'black', 'orange', 'gray', 'brown', '#66ff99', 
              '#cc99ff', '#cc0099', '#006699', '#ffccff', '#ff5050', '#ffffcc', '#808000', '#000066', '#e6e6ff',
              '#91BEF4', '#82abdb', '#7498c3', '#6585aa', '#577292', '#485f7a', '#3a4c61', '#A10000', '#aa1919',
              '#bd4c4c', '#c66666', '#d99999', '#218450', '#19663e', '#7cbe9b', '#3a9d69', '#bddecd', '#846198', 
              '#735585', '#c9afd8', '#a57abe', '#f7ef93', '#faf5bc'];
var currentColor;
var change = false;

function colorPalette () {
  // Column Builder
  for (var i = 0; i < 20; i++) {
    var colorRow = document.createElement('div');
    colorRow.className = 'colorRow';
    colorRow.id = i;
    colorGrid.appendChild(colorRow);
  }
  setRandomColors();
}
 
function setRandomColors () { 
  //Sets Colors of Columns
  for (var x = 0; x < 20; x++) {
    var colorBlock = document.getElementById(x);
    colorBlock.style.backgroundColor = colors[Math.floor(Math.random() * colors.length + 1)];
  }
} 

document.getElementById('colorGrid').addEventListener('click', colorPick);
function colorPick(colorGrid){
  currentColor = event.target.style.backgroundColor;
  chosenColor.style.backgroundColor = currentColor;
}

document.getElementById('erase').addEventListener('click', erase);
function erase () {
  currentColor = '#ffffff';
  chosenColor.style.backgroundColor = currentColor;
}

document.getElementById('clear').addEventListener('click', clear);
function clear () {
  location.reload();
}

document.getElementById('refreshColors').addEventListener('click', setRandomColors);



function canvasMaker() {

  for (var i = 0; i < 20; i++) {

    var row = document.createElement('div');
    row.className = 'row';

    for (var k = 0; k < 40; k++) {
      var block = document.createElement('div');
      block.className = 'block';
      row.appendChild(block);
    }
    canvasGrid.appendChild(row);
  }
}

document.getElementById('canvasGrid').addEventListener('mousedown', setPick);
function setPick(){
  if (event.target.className === 'block'){
    event.target.style.backgroundColor = currentColor;
    change = true;
  }
}

document.getElementById('canvasGrid').addEventListener('mouseup', function () {

  change = false;
});

document.getElementById('canvasGrid').addEventListener('mousemove', function () {

  if (change === true && event.target.className === 'block') {
    event.target.style.backgroundColor = currentColor;
  }
});




colorPalette();
canvasMaker();