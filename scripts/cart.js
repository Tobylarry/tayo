let qy = document.querySelector('.qty');
let clearCart = document.querySelector('.cc');
let dett = document.querySelector('.det');
let subTotal = document.querySelector('.subTotal');
let cartItems = JSON.parse(localStorage.getItem('cart')) //get cart  items.....


//See all functions below......
clearCart.addEventListener('click', clearCartItems) //clear cart.....
getTotal() //Get total price......




// Display cart items.....
if(localStorage.getItem('cart').length > 0){
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
        <p>${item.quantity}</p>
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
}else{
    dett.innerHTML = "EMPTY CART! PLEASE PLACE AN ORDER TO PROCEED";
}
/*** window.onload = function(){
    if(localStorage.getItem('cart') == 0){
        notification.style.display = 'block';
    }
   
}
*/





// Empty shopping cart..... method hoisted
function clearCartItems(){
        localStorage.setItem('cart', '[]');
        dett.innerHTML ='EMPTY CART! PLEASE PLACE AN ORDER TO PROCEED';
}



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
