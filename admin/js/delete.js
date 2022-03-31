
function remove(id) {

	(localStorage.removeItem(`product_${id}`))
				
	show()
	
}


function clearAll() {

localStorage.clear()
show()
	
}		


// let timeout;
// function clearAll() {
// timeout = setInterval(time, 2000);
// function time() {
// localStorage.clear()
// show()
// 	}
// }		








