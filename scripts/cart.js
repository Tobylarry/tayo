let qy = document.querySelector('.qty');
let clearCart = document.querySelector('.cc');
let dett = document.querySelector('.det');




if(localStorage.getItem('cart')){
    let obj = JSON.parse(localStorage.getItem('cart'))
    console.log(obj)
   let showItem = obj.map((item) =>{
       return `
       <div class='it'>
       <img src="${item.image}" style='height:80px; width: 50px;' alt="image"/>
       <div>
       <p>${item.name}</p>
       <p>$${item.price}</p>
       </div>
       <div class='pqt'>
        <div><label>Price</label><br>
        <p>$50</p></div>
        <div>
        <label>Quantity</label><br>
        <input type="number" placeholder="2"/><br>
        </div>
       <div>
       <label>Total</label><br>
       <p>$50</p>
       </div>
       </div>
       </div>

       `
    })
    document.querySelector('.det').innerHTML = showItem;
}
/*** window.onload = function(){
    if(localStorage.getItem('cart') == 0){
        notification.style.display = 'block';
    }
   
}
*/

clearCart.addEventListener('click', function(){
    localStorage.setItem('cart', '[]');
    dett.computedStyleMap.display = 'block';
    location.reload();
})
