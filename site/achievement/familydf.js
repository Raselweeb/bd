const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const captionText = document.getElementById('captionText');

images.forEach(image => {
    image.onclick = function() {
        modal.style.display = "block";
        modalImage.src = this.src;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    }
});

function closeModal() {
    modal.style.display = "none";
}
