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


const data = [{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1997BK.png" alt="Long-Sleeve Shirt"',
  price: "$34.99",
  description: "Long-Sleeve Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1942BK.png" alt="Long-Sleeve Shirt""',
  price: "$4.99",
  description: "Long-Sleeve Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1924BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Sold Out"
},{
  img: src='img src="1900BK.jpg" alt="Thermal Puff Jacket"',
  price: "$64.99",
  description: "Thermal Puff Jacket",
  button: "Add to Cart"
},{
  img: src='img src="1901BK.webp" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1902BK.jpg" alt="Thermal Pipe Gloves"',
  price: "$19.99",
  description: "Thermal Pipe Gloves",
  button: "Add to Cart"
},{
  img: src='img src="1903BK.webp" alt="Blacklight Hoodie"',
  price: "$34.99",
  description: "Blacklight Hoodie",
  button: "Add to Cart"
},{
  img: src='img src="1904BK.webp" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Sold Out"
},{
  img: src='img src="1905BK.jpg" alt="Bonded Hood"',
  price: "$19.99",
  description: "Bonded Hood",
  button: "Add to Cart"
},{
  img: src='img src="1906BK.webp" alt="Fleece Bandana"',
  price: "$14.99",
  description: "Fleece Bandana",
  button: "Sold Out"
},{
  img: src='img src="1907BK.webp" alt="Blacklight T-Shirt"',
  price: "$24.99",
  description: "Blacklight T-Shirt",
  button: "Add to Cart"
}

];

//.for each will list our the above items (image price etc) populating a result
// const container = document.querySelector(".container");
// data.forEach((result) => {
  // Create card element

  const container = document.querySelector(".container");
  const card = document.createElement('div');

  data.forEach((result)=>{
  
  let card = document.createElement('div');
  card.className = "card";
  let cardInnerHtml =
  `
          <div class="card">
          <div class="image"><${result.img} alt="T-Shirt"></div>
          <div class="des">
          <div class="title"><h2>${result.description}</h2></div>
              <p>${result.price}</p>
              <button><b>${result.button}</b></button>
          </div>
          </div>
  `
  container.innerHTML += cardInnerHtml;

  })
  
