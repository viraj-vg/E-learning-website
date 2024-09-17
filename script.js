// script.js
function openNav() {
    document.getElementById("mySidebar").style.width = "240px";
    document.getElementById("main").style.marginLeft = "240px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value;
    // Add your search functionality here
    console.log('Search query:', query); // For demonstration
});


// script.js

// Get the search button, input field, and course cards
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const courseCards = document.querySelectorAll('.course-card');

// Function to handle the search action
function performSearch() {
    const query = searchInput.value.toLowerCase().trim(); // Get and trim the input value

    courseCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            card.style.display = ''; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}

// Add event listener to the search button
searchButton.addEventListener('click', performSearch);

// Optional: Allow search with Enter key in the input field
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});


  // JavaScript function to navigate to a section smoothly
  function navigate(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        targetSection.scrollIntoView({
            behavior: 'smooth' // Enable smooth scrolling
        });
    });
});
