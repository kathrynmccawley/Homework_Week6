let img = document.createElement("img");

function insertImage() {
  let section = document.getElementById("imageSection");
  img.src = "https://source.unsplash.com/random";
  img.style.height = "300px";
  img.style.width = "auto";
  section.appendChild(img);
}
