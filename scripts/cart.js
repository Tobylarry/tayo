let qy = document.querySelector('.qty');
let clearCart = document.querySelector('.cc');
let subTotal = document.querySelector('.subTotal');


if(localStorage.getItem('cart')){
    let obj = JSON.parse(localStorage.getItem('cart'))
    console.log(obj)
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
        <p>${item.quantity}</p><br>
        </div>
       <div>
       <label>Total</label><br>
       <p>${'$' + (item.price * item.quantity)}</p>
       </div>
       </div>
       </div>

       `
       subTotal.innerHTML = '$' + obj.reduce((item, total) => (item.price * item.quantity) + total);
    })
    document.querySelector('.det').innerHTML = showItem;
}


window.onload = function(){
    if(localStorage.getItem('cart').length > 0){
        notification.style.display = 'block';
    }
}

clearCart.addEventListener('click', function(){
    location.reload();
    alert('cart cleared')
    localStorage.clear()
})
