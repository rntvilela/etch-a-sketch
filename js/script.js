document.addEventListener('DOMContentLoaded', function() {
    let size = 16;
    const sectionElement = document.getElementById('container');

    for(let j = 0; j < size; j++) {
        for(let i = 0; i < size; i ++) {
            let divElement = document.createElement('div');
            divElement.setAttribute('id', 'item');
            sectionElement.appendChild(divElement);
        }
    }
});