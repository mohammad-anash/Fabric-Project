function getColumnInfo(event) {
  const currentColumn = event.target;
  const currentColumnValue = currentColumn.value;
  const currentIndex = currentColumn.dataset.index;
  const currentRow = currentColumn.parentElement.parentElement;
  return { currentColumn, currentColumnValue, currentIndex, currentRow };
}

function handleItemCalculation(currentRow) {
  let itemPiece = 0;
  let itemRate = 0;
  let itemDisc = 0;

  const itemPieceElement = currentRow.querySelector('[data-index="3"]');
  const itemRateElement = currentRow.querySelector('[data-index="4"]');
  const itemDiscElement = currentRow.querySelector('[data-index="5"]');

  if (itemPieceElement) {
    itemPiece = Number(itemPieceElement.value) || 0;
  }

  if (itemRateElement) {
    itemRate = Number(itemRateElement.value) || 0;
  }

  if (itemDiscElement) {
    itemDisc = Number(itemDiscElement.value) || 0;
  }

  console.log("Item Piece:", itemPiece);
  console.log("Item Rate:", itemRate);
  console.log("Item Disc:", itemDisc);

  // Add your calculation logic here if needed
}

function handleKeyDown(event) {
  const currentValue = event.key;
  if (currentValue) {
    const columnInfo = getColumnInfo(event);
    if (["3", "4", "5"].includes(columnInfo.currentIndex)) {
      event.preventDefault();

      const isNumber = currentValue >= 0 && currentValue <= 9;
      if (isNumber) {
        columnInfo.currentColumn.value += currentValue;
      }
    }
    handleItemCalculation(columnInfo.currentRow);
  }
}

function handleDomContentLoad() {
  document.body.addEventListener("keydown", handleKeyDown);
}

window.addEventListener("DOMContentLoaded", handleDomContentLoad);
