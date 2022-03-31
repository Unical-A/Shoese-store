let hash = location.hash
let id = hash.slice(1)

let productForEdit = JSON.parse(localStorage.getItem(`product_${id}`));

document.getElementById('nameedit').value = productForEdit.name;
document.getElementById('priceedit').value = productForEdit.price;
document.getElementById('imageedit').name = productForEdit.image;
document.getElementById('img').setAttribute("src", `./img/${productForEdit.image}`)

function saveEdit() {
	productForEdit.name = document.getElementById('nameedit').value
	productForEdit.price = document.getElementById('priceedit').value
	productForEdit.image = document.getElementById('imageedit').name;
	let files = document.getElementById('imageedit').files;

	if (files && files[0]) {
		productForEdit.image = document.getElementById('imageedit').files[0]['name']
	}

	localStorage.setItem(`product_${id}`, JSON.stringify(productForEdit))
	location.href = 'admin.html'
}

function setImg(img){
	document.getElementById('img').setAttribute("src", `./img/${img.files[0]['name']}`)
}