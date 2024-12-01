// Function to search for a review by ID
function searchReview() {
    const reviewId = document.getElementById('review-id').value;

    fetch(`http://localhost:3000/reviews/${reviewId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('review-details').style.display = 'block';
                document.getElementById('edit-review').value = data.review.reviewText;
                document.getElementById('edit-rating').value = data.review.rating;
                document.getElementById('status-message').textContent = '';
            } else {
                document.getElementById('status-message').textContent = "Review not found.";
                document.getElementById('status-message').style.color = 'red';
                document.getElementById('review-details').style.display = 'none';
            }
        })
        .catch(error => console.error('Error fetching review:', error));
}

// Function to update the review
function updateReview() {
    const reviewId = document.getElementById('review-id').value;
    const reviewText = document.getElementById('edit-review').value;
    const rating = document.getElementById('edit-rating').value;

    fetch(`http://localhost:3000/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review: reviewText, rating: rating })
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('status-message');
        if (data.success) {
            messageElement.textContent = "Review updated successfully!";
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = "Review updated successfully!";
            messageElement.style.color = 'green';
        }
    })
    .catch(error => console.error('Error updating review:', error));
}


// Function to delete the review
function deleteReview() {
    const reviewId = document.getElementById('review-id').value;

    fetch(`http://localhost:3000/reviews/${reviewId}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('status-message').textContent = "Review deleted successfully!";
                document.getElementById('status-message').style.color = 'green';
                document.getElementById('review-details').style.display = 'none';
            } else {
                document.getElementById('status-message').textContent = "Failed to delete review.";
                document.getElementById('status-message').style.color = 'red';
            }
        })
        .catch(error => console.error('Error deleting review:', error));
}

// Function to handle user login
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('login-status-message');
        if (data.success) {
            messageElement.textContent = "Login successful!";
            messageElement.style.color = 'green';
            // Redirect user to another page or show user dashboard
            window.location.href = '/dashboard.html'; // Example redirection
        } else {
            messageElement.textContent = data.message || "Login failed.";
            messageElement.style.color = 'red';
        }
    })
    .catch(error => console.error('Error logging in:', error));
}


// Function to handle user registration
function registerUser() {
    const name = document.getElementById('register-name').value;
    const age = document.getElementById('register-age').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const isAdmin = document.getElementById('register-isAdmin').checked;
    const isReviewer = document.getElementById('register-isReviewer').checked;

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, email, password, isAdmin, isReviewer })
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('register-status-message');
        if (data.success) {
            messageElement.textContent = "Registration successful!";
            messageElement.style.color = 'green';
            // Optionally redirect to login page
            window.location.href = '/login.html'; // Example redirection
        } else {
            messageElement.textContent = data.error || "Registration failed.";
            messageElement.style.color = 'red';
        }
    })
    .catch(error => console.error('Error registering user:', error));
}

