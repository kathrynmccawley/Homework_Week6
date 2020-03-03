let cells = [];

function cellArray() {
  let table = document.getElementById("table");
  for (let r = 0; r < table.rows.length; r++) {
    for (let c = 0; c < table.rows[r].cells.length; c++) {
      cells.push(table.rows[r].cells[c]);
    }
  }
  cellColor();
}

function cellColor() {
  for (var i = 0; i < cells.length; i++) {
    if (i % 2) {
      cells[i].style.background = "#EE0E0E";
    } else {
      cells[i].style.background = "#FFFB00";
    }
  }
}

cellArray();
