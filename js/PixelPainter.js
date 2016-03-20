var canvasGrid = document.getElementById('canvasGrid');
var colorGrid  = document.getElementById('colorGrid');
var colors = [];
hexArray = ["a","b","c","d","e","f","1","2","3","4","5","6","7","8","0","9"];
hexColor = "#";
(function generateColor(){
  while(colors.length !== 20){
    for (i = 0; i < 6; i++){
    hexColor = hexColor.concat(hexArray[Math.floor(Math.random()*hexArray.length)+1]);}
    colors.push(hexColor);
    console.log(colors);
}
})();

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