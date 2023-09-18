let image = document.querySelectorAll('.image');
let show = document.querySelector('.show');
let main = document.querySelector('.mainProduct');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let namee = document.querySelector('.name');
let price = document.querySelector('.price');
const x = document.querySelector('.x')
let minus = document.querySelector('.minus');
let addition  = document.querySelector('.addition');
let qty = document.querySelector('.qty');
let add = document.getElementById('add');
let det = document.querySelector('.det');
let notification = document.querySelector('.notification');
let switchs = false;


//SETTING GLOBAL VARIABLES SO WE CAN ACCESS THEM FROM INSIDE THE FUNCTIONS.
let value = 0;



/** image[0].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/blsckTop.jpg"
    img1.src = "./image/trend1.jpg"
    img2.src = "./image/trend2.jpg"
    img3.src = "./image/trend1.jpg"
    namee.innerHTML = 'Boogy Boyz Black Tshirt';
    price.innerHTML = '$50.00 USD';
})
*/
image[1].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/whiteRed.jpg"
    img1.src = "./image/trend11.jpg"
    img2.src = "./image/whiteRed.jpg"
    img3.src = "./image/trend11.jpg"
    namee.innerHTML = 'Boogy Boyz star cap Red';
    price.innerHTML = '$30.00 USD';
})

image[2].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/blue.JPG"
    img1.src = "./image/trend3.jpeg"
    img2.src = "./image/trend4.jpeg"
    img3.src = "./image/trend5.jpeg"
    namee.innerHTML = 'Boogy Boyz star cap Blue';
    price.innerHTML = '$35.00 USD';
})

image[3].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/black.JPG"
    img1.src = "./image/trend12.jpg"
    img2.src = "./image/trend9.jpeg"
    img3.src = "./image/trend8.jpeg"
    namee.innerHTML = 'Boogy Boyz star cap Black';
    price.innerHTML = '$30.00 USD';
})

image[4].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/black.JPG";
    img1.src = "./image/trend5.jpeg"
    img2.src = "./image/trend7.jpeg"
    img1.src = "./image/trend6.jpeg"
    img2.src = "./image/trend7.jpeg"
    img3.src = "./image/trend10.jpeg"
    namee.innerHTML = 'Boogy Boyz star cap Orange';
    price.innerHTML = '$30.00 USD';
})

x.addEventListener('click', function(){
    show.style.display = 'none';
})

minus.addEventListener('click', function(){
    if(qty.innerHTML == 0 || qty.innerHTML <  0){
        qty.innerHTML = 0;
    }
    else{
        value--;
        qty.innerHTML = value;
        valaue = 0;
    }
})

addition.addEventListener('click', function(){
    value++;
    qty.innerHTML = value;
    value = 0;
})


let products = JSON.parse(localStorage.getItem('products'));
let cart = JSON.parse(localStorage.getItem('cart'));

let quantity = JSON.parse(localStorage.getItem('quantity'));
let valu = JSON.parse(localStorage.getItem('valu'));


//fetch data from json file
    fetch("data.json")
    .then(function(response, res){
        return response.json();
    })
    .then(function(data){
        localStorage.setItem('products', JSON.stringify(data));
        
        if(!localStorage.getItem('cart')){
            localStorage.setItem('cart', '[]');
            console.log(localStorage.getItem('cart'))
        }
        console.log(localStorage.getItem('products', 'val'))
    })

//for quantity of each product.
  fetch("quantity.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        localStorage.setItem('quantity', JSON.stringify(data));

          if(!localStorage.getItem('valu')){
            localStorage.setItem('valu', '[]');
            console.log(localStorage.getItem('valu'))
        }
        console.log(localStorage.getItem('quantity'))
    })


  
//ADDING THE PRODUCT IN THE CART

add.addEventListener('click', function(){
    show.style.display = 'none';
    if(!switchs && localStorage.getItem('cart')){
        notification.style.display = 'block'   
    }

    let nameee  = namee.innerHTML;
    console.log(nameee)
    
    let product = products.find(function(product){
        return product.name == nameee;
    })

    if(cart.length == 0){
        cart.push(product);
    }
    else{
        let res = cart.find(function(element){
             element.quantity = parseInt(value);
            return element.name == nameee;
        });
        console.log(res)
        if(res === undefined){
            cart.push(product);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    
//get order price total
function getTotal(){
    let temp = cart.map(function(item){
        return parseFloat(item.price);
    })

    let sum = temp.reduce(function(prev, next){
        return prev + next;
    }, 0);

    console.log(sum, 'hero');
}


    console.log(localStorage.getItem('cart'))
  
})

//removing Items
function removeItemFromCart(productId){
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));
}



console.log(cart)
console.log('n')



