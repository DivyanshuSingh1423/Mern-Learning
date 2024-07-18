/*
    Call BackEnd API via Apiclient.js

*/
import { apiCall } from "./api-client.js";
import cartOperations from "./cart-service.js";
async function loadPizza(){
    const URL = 'https://raw.githubusercontent.com/brainmentorspvtltd/pizza-api/main/pizza.json';
    //const promise = apiCall(URL);
    try{
    const response = await apiCall(URL);
    const obj = await response.json();
    printPizzas(obj.Vegetarian);
    console.log("code run");
    }
    catch(err){
        console.log('Error in Fetch call ', err);
    }
    //promise.then(callBackFn).catch(callBackFn)
    // Pending
    /*promise.then(function(response){
        const pr = response.json();// JSON --> object (async)
        pr.then(function(data){
            printPizzas(data.Vegetarian);
            console.log('Pizza Data ', data);
        }).catch(function(err){
            console.log('Invalid JSON ', err);
        })
    }).catch(function(err){
        console.log('Unable to make API Call ', err);
    }); */
}
loadPizza();

function printPizzas(pizzas){
    cartOperations.pizzas = pizzas;
    // Loop and call printPizza
    for(var i = 0 ; i<pizzas.length; i++){
        printPizza(pizzas[i]);
    }

}
function addToCart(){
    const pizzaId = this.getAttribute('pizza-id');
    //console.log('Add to Cart Call ', this.getAttribute('pizza-id'));
    cartOperations.addInCart(pizzaId);
    
    printCart();
}

function printCart(){
    const pizzasInCart = cartOperations.viewAll();
    document.getElementById('carts').innerHTML = '';
    pizzasInCart.forEach(p=>printCartItem(p));

    document.getElementById('carts')
    .appendChild(printTotal(pizzasInCart))
}
function printCartItem(pizza){
    const pTag = document.createElement('p');
    pTag.innerText = `${pizza.name} ${pizza.price}`;
    document.getElementById('carts').appendChild(pTag);
    
}

function printTotal(pizzasInCart){
    
    const total = pizzasInCart.reduce((acc, pizza)=>acc + parseFloat(pizza.price), 0).toFixed(2);
    console.log('Total is ', total);
    const pTag = document.createElement('p');
    pTag.innerText = 'Total Bill '+total;
    return pTag;
}

function printPizza(pizza){
    // const div = document.createElement('div'); //<div></div>
    // div.className = 'card';
    // div.style.width = '18rem';
    // const img= document.createElement('img');
    // img.src = pizza.assets.menu[0].url;
    // img.className = 'card-img-top';
    // div.appendChild(img);

    /*const card= `
    <div class="card" style="width: 18rem;">
  <img src="${pizza.assets.menu[0].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pizza.name}</h5>
    <p class="card-text">${pizza.menu_description}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
    `;
    document.getElementById('pizzas').innerHTML = document.getElementById('pizzas').innerHTML + card;
    */
    // Design of one pizza
    // Runtime DOM
    
    const cardDiv = document.createElement('div'); // <div><div>
    cardDiv.className = 'card';
    cardDiv.style.width = '18rem';
    const img = document.createElement('img'); // <img>
    img.src = pizza.assets.menu[0].url;
    img.className = 'card-img-top';
    const cardBodyDiv = document.createElement('div'); 
    cardBodyDiv.className = 'card-body';
    const h5 = document.createElement('h5'); // <h5>
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const pTag = document.createElement('p');
    pTag.className = 'card-text';
    pTag.innerText = pizza['menu_description'] + " &#8377;"+pizza.price;
    const button = document.createElement('button');
    button.innerText='Add to Cart';
    button.setAttribute('pizza-id', pizza.id);
    button.className = 'btn btn-primary';
    button.addEventListener('click', addToCart);
    cardBodyDiv.appendChild(h5);
    cardBodyDiv.appendChild(pTag);
    cardBodyDiv.appendChild(button);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
//     const card  = `
//     <div class="card" style="width: 18rem;">
//   <img src="${pizza.assets.menu[0].url}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${pizza.name}</h5>
//     <p class="card-text">${pizza['menu_description']} &#8377; ${pizza.price}</p>
//     <button onclick="${addToCart}" class="btn btn-primary">Add to Cart</button>
//   </div>
// </div>`;
const div = document.getElementById('pizzas');
div.appendChild(cardDiv);
//div.innerHTML = div.innerHTML +  card;
//*/
}