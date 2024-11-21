// Flag to track if movies have already been loaded
let moviesLoaded = false;

// Function to load movies from the server and populate the dropdown
function loadMovies() {
    if (moviesLoaded) return; // Prevent further calls if movies are already loaded

    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => {
            const movieSelect = document.getElementById('movie');
            data.movies.forEach(movie => {
                let option = document.createElement('option');
                option.value = movie.MovieID;
                option.textContent = movie.Name;
                movieSelect.appendChild(option);
            });
            moviesLoaded = true; // Set flag to true after loading movies
        })
        .catch(error => console.error('Error loading movies:', error));
}

// Add event listener to the movie dropdown to load movies on first click
document.getElementById('movie').addEventListener('click', loadMovies);

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('http://localhost:3000/submit-review', {
        method: 'POST',
        body: JSON.stringify({
            movie: formData.get('movie'),
            review: formData.get('review'),
            rating: formData.get('rating'),
            tags: Array.from(formData.getAll('tags')),
            name: formData.get('name'),
            email: formData.get('email'),
            age: formData.get('age')
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('status-message');
        if (data.success) {
            messageElement.textContent = `Review submitted successfully! Your Review ID is: ${data.reviewId}`;
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = "Failed to submit review.";
            messageElement.style.color = 'red';
        }
    })
    .catch(error => console.error('Error submitting review:', error));
});
