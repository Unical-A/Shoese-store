// function add(){
//     let nameVal = document.getElementById('name').value
//     let priceVal = document.getElementById('price').value
//     let imageVal = document.getElementById('image').files[0]['name']

//     let id = 1

//     if(localStorage.getItem('id') != null){
//         id = +localStorage.getItem('id') + 1
//     }

//     let product = {
//         id: id,
//            name: nameVal,
//         price: priceVal,
//         image: imageVal
//     }

//     localStorage.setItem(`product_${id}`, JSON.stringify(product))
//     localStorage.setItem(`id`, id)

//     location.href = 'admin.html'
// }



function add(){
	let nameVal = document.getElementById('name').value
	let priceVal = document.getElementById('price').value
	let imageVal = document.getElementById('image').files[0]['name']
	
	
  let id = localStorage.getItem('id');
  if (!id) {
	  id = 1;
  } else {
	  id++;
  }

	let product = {
		 id: id,
		 name: nameVal,
		 price: priceVal,
		 image: imageVal
	}

	localStorage.setItem(`product_${id}`, JSON.stringify(product))
	localStorage.setItem(`id`, id)

	location.href = 'admin.html'
}