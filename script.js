const products = document.querySelector("#products");
const spinner = document.querySelector("#spin")
const count = document.querySelector(".count")
const model=document.querySelector(".model-head")
const signupbtn=document.querySelector(".sign-up-btn")
const signinbtn=document.querySelector(".sign-in-btn")

//console.log(count.innerHTML)
var products_data;

function call(rating) {
   // console.log(rating);
    let res = ``;
    for (let i = 0; i < rating; i++) {
        res += `<span class="fa fa-star checked"></span>`
    }
    return res;
}


function cartIncreament() {
    count.innerHTML++;

}

function getcount(){
    return  count.innerHTML;
}

function cartDecreament() {
    count.innerHTML--;
}



// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(console.log(res))
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => {
//console.log(data);
            products_data = data;
            spinner.style.display = 'none';
            data.map((d, index) => {
                products.innerHTML = products.innerHTML + `<div class="col-md-3 my-1">
        <div class="card">
            <img src="${d.image}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <div class="product-header">
                    <h5 class="card-title">${d.title.split("").slice(0,25).join("")}...}</h5>
                    <h4 class="card-prize">$${d.price}</h4>
                </div>
                <p class="card-text">${d.description.split("").slice(0,100).join("")}...</p>
                
                ${call(Math.round (d.rating.rate))}
                <span>(${d.rating.count})</span>

                <div class="products-btn">
                    <button id=${index}  class="btn  btn-primary addtocart">Add to cart</button>
                    <a hrf="#" class="btn  btn-primary mx-4 buynow">Buy now</a>
                </div>
            </div>
        </div>
    </div>`


            })
            const Btnaddtocart = document.querySelectorAll(".addtocart");
            //console.log(Btnaddtocart);
            Btnaddtocart.forEach((d) => {
                d.addEventListener("click", handleclick);
            })
            const Btnbuynow = document.querySelector(".buynow")



        }
    )





        // fetch('https://api.npoint.io/20c1afef1661881ddc9c')
        // .then(response => response.json())    
        // .then((data) =>{ console.log(data)});