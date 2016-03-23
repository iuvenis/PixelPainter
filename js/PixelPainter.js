var canvasGrid = document.getElementById('canvasGrid');
var colorGrid  = document.getElementById('colorGrid');
var colors = [];
hexArray = ["a","b","c","d","e","f","1","2","3","4","5","6","7","8","0","9"];
var hexColor = "#";

function generateColor(){
  colors = [];
  while(colors.length !== 20){
    for (i = 0; i < 6; i++){
      hexColor = hexColor.concat(hexArray[Math.floor(Math.random()*hexArray.length)]);
    }
    colors.push(hexColor);
    hexColor = '#';
  }
}

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
    generateColor();
    colorBlock.style.backgroundColor = colors[x];
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
    var blocks = document.getElementsByClassName('block');
    for(var i = 0; i < blocks.length; i++) {
      blocks[i].style.backgroundColor = 'white';
    }
  }

document.getElementById('refreshColors').addEventListener('click', setRandomColors);

document.getElementById('removeGridlines').addEventListener('click', removeGridlines);

 function removeGridlines () {

  var blocks = document.getElementsByClassName('block');

  if (blocks[0].style.border !== 'none'){

    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.border = 'none';
    }
    canvasGrid.style.border = 'solid';
    document.getElementById('removeGridlines').innerHTML = 'Use Gridlines';
  }
  else {
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.border = '1px solid black';
    }
    canvasGrid.style.border = 'none';
    document.getElementById('removeGridlines').innerHTML = 'Remove Gridlines';
  }

 }



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

canvasGrid.addEventListener('mousedown', setPick);
function setPick(){
  if (event.target.className === 'block'){
    event.target.style.backgroundColor = currentColor;
    change = true;
  }
}

canvasGrid.addEventListener('mouseup', function () {

  change = false;
});

canvasGrid.addEventListener('mousemove', function () {

  if (change === true && event.target.className === 'block') {
    event.target.style.backgroundColor = currentColor;
  }
});




colorPalette();
canvasMaker();