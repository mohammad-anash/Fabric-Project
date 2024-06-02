$(document).ready(() => {
  const arr = [
    "s.no",
    "particulars",
    "HSN Code",
    "Pcs./Mtr.",
    "Rate",
    "Disc. %",
    "Amount",
  ];

  // Select Element
  const bill = $(".bill");
  const inputContainer = $("#input-container");
  const widths = [30, 500, 190, 200, 100, 150, 240];
  arr.forEach((element, index) => {
    const head = $("<div>").addClass("head").text(element);
    const ul = $("<ul>").addClass("unorder-list");

    createRow({
      totalColumns: widths.length,
      columnType: "li",
      classList: "input-div",
      targetParent: ul,
    });
    inputContainer.append(ul);

    head.width(widths[index]);
    $(".heading").append(head);
    // bill.append('ul');
  });

  const inputDivs = $(".input-div");
  createAndAppendEle(inputDivs, "input");
  // Add create input dynamically
  const sections = $(".bill #section");
  $(document).on("keydown", function (e) {
    if (e.ctrlKey && e.which === 67) {
      const createUl = $("<ul>").addClass("unorder-list");
      for (let i = 0; i < 10; i++) {
        const createLi = $("<li>");
        const createInput = $("<input>");

        createLi.append(createInput);
        createUl.append(createLi);
      }
      bill.append(createUl);
    }
  });
});

function createRow({ totalColumns, columnType, classList, targetParent }) {
  try {
    for (let i = 0; i < totalColumns; i++) {
      const createElement = createColumn(columnType);
      if (!!classList) {
        createElement.addClass(classList);
      }
      targetParent.append(createElement);
    }
  } catch (err) {
    alert(err.message);
  }
}

function createColumn(columnType) {
  switch (columnType) {
    case "li":
      return $("<li>");
    case "ul":
      return $("<ul>");
    case "input":
      return $("<input>");
    case "div":
      return $("<div>");
    default:
      throw Error("invalid column");
  }
}

function createAndAppendEle(targetParent, elementName ) {
  console.log(targetParent.length)
  for (let i = 0; i < targetParent.length; i++) {
    const inputElement = createColumn(elementName);
    targetParent[i].append(inputElement[0]);
  }
}
