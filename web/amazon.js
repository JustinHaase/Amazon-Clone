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
  img: src='img src="1997BK.png" alt="T-Shirt"',
  price: "$34.99",
  description: "Long-Sleeve Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1942BK.png" alt="T-Shirt"',
  price: "$4.99",
  description: "Long-Sleeve Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Sold Out"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Sold Out"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Add to Cart"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
  button: "Sold Out"
},{
  img: src='img src="1998BK.png" alt="T-Shirt"',
  price: "$24.99",
  description: "T-Shirt",
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
          <div class="title"><h2>${result.description}</h2></div>
          <div class="des">
              <p>${result.price}</p>
              <button><b>${result.button}</b></button>
          </div>
          </div>
  `
  container.innerHTML += cardInnerHtml;

  })
  
  

  
  // const container = document.querySelector(".container");
  // const card = document.createElement('div');

  // data.forEach((result)=>{
  
  // let card = document.createElement('div');
  // card.className = "card";
  // let cardInnerHtml =
  // `
  //         <div class="image"><${result.img} alt="T-Shirt"></div>
  //         <div class="title"><h2>${result.description}</h2></div>
  //         <div class="des">
  //             <p>${result.price}</p>
  //             <button><b>${result.button}</b></button>
  //         </div>
  // `
  // container.innerHTML += cardInnerHtml;

  // })
  