const checkBoxesDiv = document.querySelectorAll('div.checkbox');
const directions = [
  [1, 1], // Down-right
  [-1, -1], // Up-left
  [-1, 1], // Up-right
  [1, -1], // Down-left
];

checkBoxesDiv.forEach((box, index) => {
  box.addEventListener('click', () => {
    refreshBoard();
    highlightBishopPath(index);
  });
});

function highlightBishopPath(index) {
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
