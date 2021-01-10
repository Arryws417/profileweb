const txtElement = ['Freelancer', 'Front-end','Fiber Optic Engineer', 'Network Engineer', 'DevOps Engineer'];
let count = 0;
let txtindex = 0;
let currenttxt = '';
let words = '';

(function ngetik(){

	if (count == txtElement.length){
		count = 0;
	}
	currenttxt = txtElement[count];

	words = currenttxt.slice(0, ++txtindex);
	document.querySelector('.capek-ngetik').textContent = words;

	if (words.length == currenttxt.length){
		count++;
		txtindex = 0;
	}
	setTimeout(ngetik, 500);
})();