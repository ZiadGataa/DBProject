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
