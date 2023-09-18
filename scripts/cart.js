let qy = document.querySelector('.qty');
let clearCart = document.querySelector('.cc');
let subTotal = document.querySelector('.subTotal');

    let obj = JSON.parse(localStorage.getItem('cart'))

if(localStorage.getItem('cart')){
    let obj = JSON.parse(localStorage.getItem('cart'))
    console.log(obj);
   let showItem = obj.map((item) =>{
       return `
       <div class='it'>
       <img src="${item.image}" style='height:80px; width: 50px;' alt="image"/>
       <div>
       <p>${item.name}</p>
       <p>${item.price}</p>
       </div>
       <div class='pqt'>
        <div><label>Price</label><br>
        <p>${'$' + item.price}</p></div>
        <div>
        <label>Quantity</label><br>
        <span>-</span> <p>${item.quantity}</p><span> + </span>
        <span>-</span> <p>${item.quantity}</p><span> + </span>
        </div>
       <div>
       <label>Total</label><br>
       <p>${'$' + (item.price * item.quantity)}</p>
       </div>
       </div>
       </div>

       `
       
    })
    document.querySelector('.det').innerHTML = showItem;
}

window.onload = function(){
    if(localStorage.getItem('cart').length != 0){
        notification.style.display = 'block';
    }
}

clearCart.addEventListener('click', function(){
    location.reload();
    localStorage.setItem('cart', '[]');
    obj = JSON.parse(localStorage.getItem('cart'))
    document.querySelector('.det').innerHTML = ' EMPTY CART! PLEASE PLACE AN ORDER TO PROCEED';
})
