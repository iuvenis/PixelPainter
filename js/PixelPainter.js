var currentColor;
var change = false;

var pixelPainter = function () {
  var colors = [];
  var setColors = ['black', 'blue', 'red', 'green', 'yellow'];
  var hexArray = ["a","b","c","d","e","f","1","2","3","4","5","6","7","8","0","9"];
  var hexColor = "#";

  function generateColor(){
    colors = [];

    setColors.forEach(function (color) {

      colors.push(color);
    })

    while(colors.length !== 20){
      for (i = 0; i < 6; i++){
        hexColor = hexColor.concat(hexArray[Math.floor(Math.random()*hexArray.length)]);
      }
      colors.push(hexColor);
      hexColor = '#';
    }
  }

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

  function colorPick(colorGrid){
    currentColor = event.target.style.backgroundColor;
    chosenColor.style.backgroundColor = currentColor;
  }

  function erase () {
    currentColor = '#ffffff';
    chosenColor.style.backgroundColor = currentColor;
  }

  function clear () {

    var blocks = document.getElementsByClassName('block');

    for(var i = 0; i < blocks.length; i++) {
      blocks[i].style.backgroundColor = 'white';
    }
  }

  function removeGridlines () {

    var blocks = document.getElementsByClassName('block');
    var gridlineImg = document.createElement('img');
    gridlineImg.src = 'http://icons.iconarchive.com/icons/fatcow/farm-fresh/16/grid-icon.png';

    if (blocks[0].style.border !== 'none'){

      for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.border = 'none';
      }
      canvasGrid.style.border = 'solid';
      canvasGrid.style.width = '800px';
      canvasGrid.style.height = '400px';
      document.getElementById('removeGridlines').innerHTML = 'Use Gridlines ';
      document.getElementById('removeGridlines').appendChild(gridlineImg);
    }
    else {
      for ( var m = 0; m < blocks.length; m++) {
        blocks[m].style.border = '1px solid black';
      }
      canvasGrid.style.border = 'none';
      document.getElementById('removeGridlines').innerHTML = 'Remove Gridlines ';
      document.getElementById('removeGridlines').appendChild(gridlineImg);
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

  function setPick(){
    if (event.target.className === 'block'){
      event.target.style.backgroundColor = currentColor;
      change = true;
    }
  }

  function mouseUp() {
    change = false;
  }

  function mouseMove () {

    if (change === true && event.target.className === 'block') {
      event.target.style.backgroundColor = currentColor;
    }
  }

  


  return {

    generateColor   : generateColor,
    colorPalette    : colorPalette,
    setRandomColors : setRandomColors,
    colorPick       : colorPick,
    erase           : erase,
    clear           : clear,
    removeGridlines : removeGridlines,
    canvasMaker     : canvasMaker,
    setPick         : setPick,
    mouseUp         : mouseUp,
    mouseMove       : mouseMove
  };
};


var canvasGrid = document.getElementById('canvasGrid');
  canvasGrid.style.backgroundColor = '#ffffff';
  canvasGrid.addEventListener('mousedown', function () {
    pixelPainter().setPick();
  });

  canvasGrid.addEventListener('mouseup', function () {
    pixelPainter().mouseUp();
  });

  canvasGrid.addEventListener('mousemove', function () {
    pixelPainter().mouseMove();
  });

var colorGrid  = document.getElementById('colorGrid');
  colorGrid.addEventListener('click', function () {
    pixelPainter().colorPick();
  });


document.getElementById('erase').addEventListener('click', function () {
  pixelPainter().erase();
});

document.getElementById('clear').addEventListener('click', function () {
  pixelPainter().clear();
});

document.getElementById('refreshColors').addEventListener('click', function () {
  pixelPainter().setRandomColors();
});

document.getElementById('removeGridlines').addEventListener('click', function () {
  pixelPainter().removeGridlines();
});


pixelPainter().canvasMaker();
pixelPainter().colorPalette();
