let x = prompt("Please enter x: ");
switch (typeof x) {
  case "number":
    console.log("x - число");
    break;
  case "string":
    console.log("x - строка");
    break;
  case "boolean":
    console.log("x - булево значение");
    break;
  default:
    console.log("Тип x не определен");
}
