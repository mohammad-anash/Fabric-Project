// $(document).ready(() => {
//   const arr = [
//     "sno",
//     "particular",
//     "HSNCode",
//     "Pcs/Mtr",
//     "Rate",
//     "Discount",
//     "Amount Rs.",
//   ];

//   // Select Element
//   const bill = $(".bill");
//   const widths = [30, 200, 190, 150, 100, 250, 200];
//   arr.forEach((element, index) => {
//     const head = $("<div>").addClass("head").text(element);
//     const ul = $("<ul>").addClass("unorder-list");
//     for (let i = 0; i < 9; i++) {
//       const li = $("<li>").addClass("list");
//       const input = $("<input>").addClass("inp");

//       li.append(input);
//       ul.append(li);
//       li.addClass(element)
//     }
//     head.width(widths[index]);
//     $(".heading").append(head);
//     bill.append(ul);
//   });

//   // Add create input dynamically
//   const sections = $(".bill #section");
//   $(document).on("keydown", function (e) {
//     if (e.ctrlKey && e.which === 67) {
//       const createInput = $("<input>");
//       sections.append(createInput);
//     }
//   });
// });
