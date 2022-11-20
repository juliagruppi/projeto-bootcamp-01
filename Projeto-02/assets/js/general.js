/* Loader do site */

window.addEventListener('load', function() {
  document.querySelector(".loader-rainbow").style.display = "none";
  setTimeout(() =>{
    document.querySelector("header").removeAttribute("style");
    document.querySelector("main").removeAttribute("style");
    document.querySelector("footer").removeAttribute("style");
    document.querySelector("#placeholder").style.display = 'none';
  },3000);
});