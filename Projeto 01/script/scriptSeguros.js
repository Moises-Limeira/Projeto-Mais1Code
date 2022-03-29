function showtext() {
  var x = this.nextElementSibling;
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let butao = document.querySelectorAll('.accordion');

butao.forEach(element => {
  element.addEventListener("click", showtext);
});






