const chessBoard = document.querySelector('.board');
const rows = document.querySelectorAll('.row');
const maxRowPresent = rows.length;

chessBoard.addEventListener('click', (e) => {
  clearBoard();
  const selectedBoxId = Number(e.target.getAttribute('id'));
  const selectedRowId = Number(e.target.parentNode.getAttribute('id'));

  let rowBoxId = selectedBoxId % maxRowPresent || maxRowPresent;

  if (rowBoxId <= maxRowPresent / 2) {
    topLeftBottomRightBishopsMove(rowBoxId, selectedRowId);
  } else if (rowBoxId <= maxRowPresent) {
    topRightBottomLeftBishopsMove(rowBoxId, selectedRowId);
  }
});

function clearBoard() {
  rows.forEach((row) => {
    const boxes = row.querySelectorAll('.checkbox');
    boxes.forEach((box) => {
      if (box.dataset.originalColor) {
        box.style.backgroundColor = box.dataset.originalColor;
        delete box.dataset.originalColor;
      }
    });
  });
}

function topLeftBottomRightBishopsMove(rowBoxId, selectedRowId) {
  let traceRow = selectedRowId;

  while (traceRow <= maxRowPresent && rowBoxId <= maxRowPresent) {
    const currentRow = rows[traceRow - 1];
    const boxes = currentRow.querySelectorAll('.checkbox');
    const box = boxes[rowBoxId - 1];
    if (!box.dataset.originalColor) {
      box.dataset.originalColor = box.style.backgroundColor;
    }
    box.style.backgroundColor = 'red';
    traceRow++;
    rowBoxId++;
  }
}

function topRightBottomLeftBishopsMove(rowBoxId, selectedRowId) {
  let traceRow = selectedRowId;

  while (traceRow <= maxRowPresent && rowBoxId >= 1) {
    const currentRow = rows[traceRow - 1];
    const boxes = currentRow.querySelectorAll('.checkbox');
    const box = boxes[rowBoxId - 1];
    if (!box.dataset.originalColor) {
      box.dataset.originalColor = box.style.backgroundColor;
    }
    box.style.backgroundColor = 'red';
    traceRow++;
    rowBoxId--;
  }
}
