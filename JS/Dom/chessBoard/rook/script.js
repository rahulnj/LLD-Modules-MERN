const checkBoxesDiv = document.querySelectorAll('div.checkbox');
const directions = [
  [1, 0], // Down
  [-1, 0], // Up
  [0, 1], // Right
  [0, -1], // Left
];

checkBoxesDiv.forEach((box, index) => {
  box.addEventListener('click', () => {
    refreshBoard();
    highlightRooksPath(index);
  });
});

function highlightRooksPath(index) {
  console.log(index);

  turnCheckboxRed(index);

  directions.forEach(([rowStep, colStep]) => {
    let [row, col] = [Math.floor(index / 8), index % 8];

    while (isInBounds(row + rowStep, col + colStep)) {
      row += rowStep;
      col += colStep;
      turnCheckboxRed(row * 8 + col);
    }
  });
}

function turnCheckboxRed(index) {
  checkBoxesDiv[index].style.backgroundColor = 'red';
}

function refreshBoard() {
  checkBoxesDiv.forEach((box) => {
    const boxId = Number(box.id);
    const rowId = Number(box.parentNode.id);
    box.style.backgroundColor = getColorForCell(rowId, boxId);
  });
}

function getColorForCell(row, col) {
  return row % 2 === col % 2 ? 'black' : 'white';
}

function isInBounds(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}
