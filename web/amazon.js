const  floatingMenu = document.getElementById("title");

document.getElementById("title").addEventListener("mouseover", function() {
    document.getElementById("title").style.color = "green";
});
document.getElementById("title").addEventListener("mouseout", function() {
     document.getElementById("title").style.color = "red";
});

const colorThief = new ColorThief();
const img = document.querySelector('img');

if (img.complete) {
  colorThief.getColor(img);
} else {
  image.addEventListener('load', function() {
    colorThief.getColor(img);
  });
}