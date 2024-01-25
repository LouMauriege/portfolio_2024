// Get the modal
let contactModal = document.getElementById("contact-modal");

// Get the button that opens the modal
let btnOpen = document.getElementById("contact-modal_button");

// Get the <span> element that closes the modal
let btnClose = document.getElementById("contact-modal_close");

console.log(contactModal, btnClose, btnOpen);

// When the user clicks the button, open the modal 
btnOpen.onclick = function() {
    contactModal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
btnClose.onclick = function() {
  contactModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
}