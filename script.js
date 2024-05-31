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
  const widths = [30, 500, 190, 200, 100, 150, 240];
  arr.forEach((element, index) => {
    const head = $("<div>").addClass("head").text(element);
    const ul = $("<ul>").addClass("unorder-list");
    for (let i = 0; i < 10; i++) {
      const li = $("<li>").addClass("list", element);
      const input = $("<input>").addClass("inp");

      li.append(input);
      ul.append(li);
      li.addClass(element);
    }
    head.width(widths[index]);
    $(".heading").append(head);
    bill.append(ul);
  });

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
