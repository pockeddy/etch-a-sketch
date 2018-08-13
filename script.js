
let gridNum =16;
let gridSize = ((100/gridNum)+'%');

function colorChange(i,j) {
  document.getElementById(`row${i}grid$${j}`).style.cssText = `background-color: black; width: ${gridSize}; height: ${gridSize};`
}

function resetGrid() {
  var chosenGridNum = prompt("what size grid? x by x:", 16);
  gridNum = chosenGridNum;
  var ChosenGridSize = ((100/gridNum)+'%');
  gridSize = ChosenGridSize;
  clear();
  gridding();

}
function gridding(){
  const container = document.querySelector('#container');
  for (let i = 0; i < gridNum; i++ ) {
    for (let j = 0; j < gridNum; j++) {
      let $i = i;
      let $j = j;
      let grid = document.createElement('div');
      grid.setAttribute('class', 'grid');
      grid.setAttribute('id', `row${i}grid$${j}`);
      grid.setAttribute('style', `width: ${gridSize}; height: ${gridSize};`);
      grid.setAttribute('onmouseover', `colorChange(${i},${j})`);
      container.appendChild(grid);
    }
  }
}
function clear(){
  var clear = document.querySelector("#container");
while (clear.firstChild) {
    clear.removeChild(clear.firstChild);
}
}
gridding();
