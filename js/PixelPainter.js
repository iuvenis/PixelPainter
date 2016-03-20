var canvasGrid = document.getElementById('canvasGrid');
var colorGrid  = document.getElementById('colorGrid');
var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'black', 'orange', 'gray', 'brown', '#66ff99', '#cc99ff', '#cc0099', '#006699', '#ffccff', '#ff5050', '#ffffcc', '#808000', '#000066', '#e6e6ff'];
var currentColor;
function colorPalette () {
  // Column Builder
  for (var i = 0; i < 20; i++) {
    var colorRow = document.createElement('div');
    colorRow.className = 'colorRow';
    colorRow.id = i;
    colorGrid.appendChild(colorRow);
  }
  //Sets Colors of Columns
  for (var x = 0; x < colors.length; x++) {
    var colorBlock = document.getElementById(x);
    colorBlock.style.backgroundColor = colors[x];
  }
}
// var chosenColor = document.createElement('div');
// colorGrid.appendChild(chosenColor);

document.getElementById('colorGrid').addEventListener('click', function(){colorPick();});
function colorPick(colorGrid){
currentColor = event.target.style.backgroundColor;
chosenColor.style.backgroundColor = currentColor;
}




function canvasMaker() {

  for (var i = 0; i < 10; i++) {

    var row = document.createElement('div');
    row.className = 'row';

    for (var k = 0; k < 20; k++) {
      var block = document.createElement('div');
      block.className = 'block';
      row.appendChild(block);
    }
    canvasGrid.appendChild(row);
  }
}

// document.getElementById('canvasGrid').addEventListener('mousedown', function(){setPick();});
// function setPick(){
//   // if (event.target.className === 'block'){
//     event.target.style.backgroundColor = currentColor;
//   // }
// }
// var clickMove = function(){document.getElementById('canvasGrid').addEventListener('mousemove', function(){setPick();});
// function setPick(){
//     event.target.style.backgroundColor = currentColor;
//     console.log("TWO", event.target);
//   }
// };
// var clickDown= function(){document.getElementById('canvasGrid').addEventListener('mousedown', function(){setPick();});
// function setPick(){
//   if (event.target.className === 'block'){
//     event.target.style.backgroundColor = currentColor;
//     console.log("ONE", event.target);
//   }
// }
// };

var eventList = [ "click", "mousemove" ];
for (var event of eventList){
  document.getElementById('canvasGrid').addEventListener(event, setPick);
  function setPick(){
  if (event.target.className === 'block'){
    event.target.style.backgroundColor = currentColor;
}
}
}




colorPalette();
canvasMaker();