const modelBody = document.querySelector(".modal-body")
//const noItem=document.querySelector(".displayblock")
//const count = document.querySelector(".count")
var removeItembtn;
   //cartDecreament();
   
function removeItem(d){
    d.target.parentElement.parentElement.parentElement.parentElement.remove();
    cartDecreament();
    console.log(getcount());
    if(getcount()==0){
        modelBody.innerHTML=`  <h3>cart is empty</h3>`;
        }
}
if(getcount()==0){
    modelBody.innerHTML=" <h3>cart is empty</h3>";
    }

function handleclick(e) {
   /// console.log(e.target.id);
    //console.log(products_data);
    const product_data = products_data.filter((d, index) => index == e.target.id);
   // console.log(product_data);
   
    // noItem.innerHTML=null
    if(getcount()==0){
    modelBody.innerHTML="";
    }
    modelBody.innerHTML += `
       <div class="col-md-9 my-1">
        <div class="card">
            <img src="${product_data[0].image}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <div class="product-header">
                    <h5 class="card-title">${product_data[0].title}</h5>
                    <h4 class="card-prize">$${product_data[0].price}</h4>
                </div>
              
                <div class="products-btn">

                    <button  id=${e.target.id} href="#" class="remove-item btn btn-primary">Remove item</button>
                    
                    <a hrf="#" class="btn btn-primary mx-4">Buy now</a>
                </div>
            </div>
        </div>
    </div>`
    cartIncreament();
    removeItembtn=document.querySelectorAll(".remove-item")
    // console.log(removeItembtn);
    removeItembtn.forEach((d) => {
        d.addEventListener("click", removeItem);
    })
}



// removeItembtn.addEventListener("click",removeItem)
