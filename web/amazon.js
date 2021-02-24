const  floatingMenu = document.getElementById("title");

document.getElementById("title").addEventListener("mouseover", function() {
    document.getElementById("title").style.color = "green";
});
document.getElementById("title").addEventListener("mouseout", function() {
     document.getElementById("title").style.color = "red";
});

// const colorThief = new ColorThief();
// const img = document.querySelector('img');

// if (img.complete) {
//   colorThief.getColor(img);
// } else {
//   image.addEventListener('load', function() {
//     colorThief.getColor(img);
//   });
// }

const container = document.querySelector(".container");

function showItems(){

let card = document.createElement('div');
card.className = "card";
let cardInnerHtml =
`
        <div class="image">
            <img src="BYSKETCHYTANK.png" alt="T-Shirt">
        </div>
        <div class="title">
            <h2>Sketchy Tank T-shirt</h2>
        </div>
        <div class="des">
            <p>$24.99</p>
            <button><b>Add to cart</b></button>
        </div>
`
card.innerHTML = cardInnerHtml;

return card;
}

container.appendChild(showItems());