// Navigation links event listener
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

// Read more functionality
/*document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const serviceBox = this.parentElement;
            const hiddenContent = serviceBox.querySelector('.hidden-content');
            
            if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
                hiddenContent.style.display = "block";
                this.textContent = "Read less"; // Change button text
            } 
            else {
                hiddenContent.style.display = "none";
                this.textContent = "Read more"; // Change button text back
            }
        });
    });
});*/
