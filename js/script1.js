function getColumnInfo(event) {
  const currentColumn = event.target;
  const currentColumnValue = currentColumn.value;
  const currentIndex = currentColumn.dataset.index;
  const currentRow = currentColumn.parentElement.parentElement;
  return { currentColumn, currentColumnValue, currentIndex, currentRow };
}
$(document).ready(() => {
  $("body").on("focusout", (event) => {
    const columnInfo = getColumnInfo(event);
    console.log(columnInfo);
  });

  $("body").on("keydown", (event) => {
    const currentValue = event.key;
    if (currentValue) {
      const columnInfo = getColumnInfo(event);
      if (["3", "4", "5"].includes(columnInfo.currentIndex)) {
        event.preventDefault();

        const isNumber = currentValue >= 0 && currentValue <= 9;
        if (isNumber) {
          columnInfo.currentColumn.value += currentValue;
        }
        console.log(columnInfo.value);
      }
    }
  });
});