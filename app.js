



// Get all the stars on the page
const stars = document.querySelectorAll('.star');

// Loop through each star
stars.forEach(function(star) {

  // Add a click event listener to the star
  star.addEventListener('click', function() {

    // Get the rating of the clicked star
    const rating = this.getAttribute('data-rating');

    // Loop through each star in the rating section
    const parent = this.parentNode;
    const stars = parent.querySelectorAll('.star');
    stars.forEach(function(s) {

      // If the star is before or equal to the clicked star,
      // mark it as active. Otherwise, mark it as inactive.
      if (s.getAttribute('data-rating') <= rating) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }

    });

  });

});


const buttons = document.querySelectorAll('.read-more');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.previousElementSibling;
    content.classList.toggle('more');
    if (content.classList.contains('more')) {
      button.innerHTML = 'Read More';
    } else {
      button.innerHTML = 'Read Less';
    }
  });
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


