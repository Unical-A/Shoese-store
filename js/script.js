let cartBox = document.getElementById('cartBox'),
    countBox = document.getElementById('count'),
    cartItems = document.getElementById('cartItems'),
    items = document.getElementById('items'),
    total,
    totalBox = document.getElementById('total')

function showCart(){
    cartBox.classList.toggle('show')

    showCartItems()
}

function show(){
    items.innerHTML = ''
    let id = localStorage.getItem('id')

    for(let i = 1; i <= id; i++){
        let product = JSON.parse(localStorage.getItem(`product_${i}`))

        if(product != null){
            items.innerHTML += `
                <div class="item">
                    <div class="item-img">
                        <img src="./img/${product.image}">
                    </div>
                    <div class="item-info">
                        <p class="item-name">${product.name}</p>
                        <a href="#" class="add" onclick="add(${product.id})">Add to cart</a>
                    </div>
                    <p id="itemPrice"><span>${product.price}</span> $</p>
                </div>
            `
        }
    }
}

function add(id){
    let product = JSON.parse(localStorage.getItem(`product_${id}`))

    let count = 1

    if(localStorage.getItem(`product_cart_${id}`) != null){

        let oldProduct = JSON.parse(localStorage.getItem(`product_cart_${id}`))
        oldProduct.count++
        oldProduct.price = product.price * oldProduct.count

        localStorage.setItem(`product_cart_${id}`, JSON.stringify(oldProduct))

    }else{
        let newProduct = {
            id: id,
            name: product.name,
            price: product.price,
            image: product.image,
            count: count
        }

        localStorage.setItem(`product_cart_${id}`, JSON.stringify(newProduct))
    }

    showCartItems()
}

function showCartItems(){
    cartItems.innerHTML = ''
    totalBox.innerHTML = `Cart is empty.`
    total = 0
    let id = localStorage.getItem('id')

    for(let i = 1; i <= id; i++){
        let product = JSON.parse(localStorage.getItem(`product_cart_${i}`))

        if(product != null){

            total += +product.price
            totalBox.innerHTML = `Total: ${total} $`

            cartItems.innerHTML += `
                <div class="cartItem">
                    <img src="./img/${product.image}">
                    <div class="cartItemInfo">
                        <p>${product.name}</p>
                        <p>${product.price} $</p>
                    </div>
                    <span id="cartItemCount">x${product.count}</span>
                    <i class="fa fa-trash" onclick="remove(${product.id})"></i>
                </div>
            `
        }

        let cartItem = document.getElementsByClassName('cartItem')
        countBox.innerHTML = cartItem.length
        
    }
}

function remove(id){
    localStorage.removeItem(`product_cart_${id}`)
    showCartItems()
}

showCartItems()
show()

