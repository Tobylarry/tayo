let qy = document.querySelector('.qty');
let clearCart = document.querySelector('.cc');
let dett = document.querySelector('.det');
let subTotal = document.querySelector('.subTotal');
let cartItems = JSON.parse(localStorage.getItem('cart')) //get cart  items.....




// Display cart items.....
    if(cartItems.length > 0){
        let obj = JSON.parse(localStorage.getItem('cart'))
        console.log(obj)
       let showItem = obj.map((item) =>{
           return `
           <div class='it'>
           <img src="${item.image}" style='height:80px; width: 50px;' alt="image"/>
           <div>
           <p>${item.name}</p>
           <p>${"$" + item.price}</p>
           </div>
           <div class='pqt'>
            <div><label>Price</label><br>
            <p>${item.price}</p>
            </div>
            <div>
            <label>Quantity</label><br>
            <span class="minuss">-</span>
            <span class="qty">${item.quantity}</span>
            <span class="additionn">+</span>
            </div>
           <div>
           <label>Sub Total</label><br>
           <p>${item.price * item.quantity}</p>
           </div>
           </div>
           </div>
    
           `
        })
        dett.innerHTML = showItem;
    }


/*** window.onload = function(){
    if(localStorage.getItem('cart') == 0){
        notification.style.display = 'block';
    }
   
}
*/


//clear cart.....
clearCart.addEventListener('click', function clearCartItems(){
    localStorage.setItem('cart', '[]');
    dett.innerHTML ='EMPTY CART! PLEASE PLACE AN ORDER TO PROCEED';
    subTotal.innerHTML = "Total $" + 0;
}
) 


//get order price total..... method hoisted
function getTotal(){
    let temp = cartItems.map(function(item){
        return parseInt(item.price ) * item.quantity;
    })

    let sum = temp.reduce(function(prev, next){
        return prev + next;
    }, 0);

    subTotal.innerHTML = "Total $" + sum;
}
getTotal() //Get total price......


//Update item quantity.... -
minuss.addEventListener('click', function(){
    if(qty.innerHTML == 0){
        qty.innerHTML = value;
    }
    else{
        value--;
        qty.innerHTML = value;
    }
})

//Update item quantity.... +
additionn.addEventListener('click', function(){
    value++;
    qty.innerHTML = value;
})