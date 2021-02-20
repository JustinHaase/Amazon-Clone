const  floatingMenu = document.getElementByClass("title");

document.getElementByClass("title").addEventListener("title", function() {
    document.getElementByClass("header").style.color = "green";
});
document.getElementByClass("title").addEventListener("mouseout", function() {
     document.getElementByClass("title").style.color = "red";
});