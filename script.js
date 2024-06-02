// $(document).ready(() => {
//   const arr = [
//     "s.no",
//     "particulars",
//     "HSN Code",
//     "Pcs./Mtr.",
//     "Rate",
//     "Disc. %",
//     "Amount",
//   ];

//   // Select Element
//   const inputContainer = $("#input-container");
//   const heading = $(".heading");
//   const widths = [30, 500, 190, 200, 100, 150, 240];

//   arr.forEach((element, index) => {
//     const head = $("<div>").addClass("head").text(element);
//     const ul = $("<ul>").addClass("unorder-list");

//     createRow({
//       totalColumns: widths.length,
//       columnType: "li",
//       classList: "input-div",
//       targetParent: ul,
//       widths,
//     });

//     inputContainer.append(ul);
//     head.width(widths[index]);
//     heading.append(head);
//   });

//   const inputDivs = $(".input-div");
//   createAndAppendEle(inputDivs, "input");

//   // Add create input dynamically
//   $(document).on("keydown", function (e) {
//     if (e.ctrlKey && e.which === 67) {
//       const createUl = $("<ul>").addClass("unorder-list");
//       inputContainer.append(createUl);

//       createRow({
//         totalColumns: widths.length,
//         columnType: "li",
//         classList: "input-div",
//         targetParent: createUl,
//       });

//       createRow({
//         totalColumns: widths.length,
//         columnType: "input",
//         classList: "li-input",
//         targetParent: createUl,
//       });
//     }
//   });
// });

// function createRow({
//   totalColumns,
//   columnType,
//   classList,
//   targetParent,
//   widths,
// }) {
//   try {
//     for (let i = 0; i < totalColumns; i++) {
//       const createElement = createColumn(columnType);
//       if (!!classList) {
//         createElement.addClass(classList);
//       }
//       if(widths && columnType === "li"){
//         createElement.width(widths[i])
//       }
//       targetParent.append(createElement);
//     }
//   } catch (err) {
//     alert(err.message);
//   }
// }

// function createColumn(columnType) {
//   switch (columnType) {
//     case "li":
//       return $("<li>");
//     case "ul":
//       return $("<ul>");
//     case "input":
//       return $("<input>");
//     case "div":
//       return $("<div>");
//     default:
//       throw Error("invalid column");
//   }
// }

// function createAndAppendEle(targetParent, elementName) {
//   for (let i = 0; i < targetParent.length; i++) {
//     const inputElement = createColumn(elementName);
//     targetParent[i].append(inputElement[0]);
//   }
// }

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

  // Select Elements
  const inputContainer = $("#input-container");
  const heading = $(".heading");
  const widths = [27, 500, 190, 200, 100, 150, 240];

  // Create headings and initial rows
  arr.forEach((element, index) => {
    const head = $("<div>").addClass("head").text(element);
    const ul = $("<ul>").addClass("unorder-list");

    createRow({
      totalColumns: widths.length,
      columnType: "li",
      classList: "input-div",
      targetParent: ul,
      widths, // Pass the widths array
    });

    inputContainer.append(ul);
    head.width(widths[index]);
    heading.append(head);
  });

  const inputDivs = $(".input-div");
  createAndAppendEle(inputDivs, "input");

  // Add create input dynamically
  $(document).on("keydown", function (e) {
    if (e.ctrlKey && e.which === 67) {
      // Ctrl + C
      const createUl = $("<ul>").addClass("unorder-list");
      inputContainer.append(createUl);

      createRow({
        totalColumns: widths.length,
        columnType: "li",
        classList: "input-div",
        targetParent: createUl, // Corrected parameter name
        widths, // Pass the widths array
      });

      createRow({
        totalColumns: widths.length,
        columnType: "input",
        classList: "li-input",
        targetParent: createUl, // Corrected parameter name
        widths, // Not used here but passed for consistency
      });
    }
  });
});

function createRow({
  totalColumns,
  columnType,
  classList,
  targetParent,
  widths,
}) {
  try {
    for (let i = 0; i < totalColumns; i++) {
      const createElement = createColumn(columnType);
      if (classList) {
        createElement.addClass(classList);
      }
      if (columnType === "li") {
        createElement.width(widths[i]); // Set the width for li elements
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
      throw new Error("Invalid column type");
  }
}

function createAndAppendEle(targetParent, elementName) {
  for (let i = 0; i < targetParent.length; i++) {
    const inputElement = createColumn(elementName);
    $(targetParent[i]).append(inputElement);
  }
}