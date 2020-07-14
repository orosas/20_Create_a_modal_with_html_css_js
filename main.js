// Get modal element

let modal = document.getElementById('simpleModal');

// Get open modal button
let modalBtn = document.getElementById('modalBtn');

// Get close button
// Nota: getElementsByClassName regresa un Array. Para seleccionar solo 
//         el primer elemento se utiliza [0]
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
// Nota: despliega modal window al hacer click en button
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Liste for outside click
window.addEventListener('click', outsideClick);


//Function to open modal
function openModal() {
    // Nota: cambia la propiedad display del elemento para que sea
    //         visible
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
    
}