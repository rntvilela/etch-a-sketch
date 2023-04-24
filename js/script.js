document.addEventListener('DOMContentLoaded', function() {
    let size = 16;
	const myButton = document.getElementById('button');

	myButton.addEventListener('click', function() {
		let size = prompt('Please enter the grid size', '16');
		size = parseInt(size);
		if (size < 1 || size > 100) {
			size = 16;
		}

		make_grid(size);
		create_listener();
	});

	make_grid(size);
	create_listener();
});


function make_grid(size) {
	const myDiv = document.getElementById('container');
	container.innerHTML = '';

	myDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

	w = 560 / size;
    
	for(let j = 0; j < size; j++) {
        for(let i = 0; i < size; i ++) {
            let divElement = document.createElement('div');
            divElement.setAttribute('class', 'item');
			divElement.style.width = `${w}px`;
			divElement.style.height = `${w}px`;
            myDiv.appendChild(divElement);
        }
    }

}

function create_listener() {

	const items = document.querySelectorAll('.item');
	
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('mouseover', function() {
			items[i].style.backgroundColor = '#00bc08';
		});
	}

}
