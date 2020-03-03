/*
 *Class 5: DOM
 * this is what it does
 */

console.log("this is a forms test");

const form = document.getElementById("searchForm");

const inp = form.elements.searchBox;

inp.addEventListener("focus", function() {
  console.log("focused on", inp.name);
});

inp.addEventListener("change", function() {
  console.log("leaving after changing", inp.name);
});

form.addEventListener("submit", function(ev) {
  console.log("submitting form", this.name);
  console.log(ev);
  ev.preventDefault();
});

let input_area = form.elements.searchArea;
const form_area_vals = [];
for (i = 0; i < input_area.length; i++) {
  if (input_area[i].checked) {
    form_area_vals.push(input_area[i].value);
  }
}

console.log(form_area_vals);
if (form_area_vals.length > 0) {
  console.log("checkboxes as been checked");
}

form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  const inp = form.elements.searchBox.value;
  if (inp == "") {
    alert("Your search term cannot be empty!");
  } else {
    form.submit();
  }
}

inp.value = "Enter your search term here";
inp.focus();

inp.addEventListener("focus", function() {
  console.log("focused on", inp.name);
  if (inp.value === "Enter your search term here") {
    inp.value = "";
  }
});

inp.addEventListener("blur", function() {
  console.log("leaving", inp.name);
  if (inp.value == "") {
    inp.value = "Enter your search term here";
  }
});
