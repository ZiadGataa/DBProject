// Load all users
function loadUsers() {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '<h3>All Users</h3>';
        data.users.forEach(user => {
          userList.innerHTML += `<p>${user.Name} (${user.Email}) - Admin: ${user.AdminUsers}, Reviewer: ${user.Reviewers}</p>`;
        });
      })
      .catch(error => console.error('Error loading users:', error));
  }
  
  // Add a new movie
  function addMovie() {
    const movieName = document.getElementById('movie-name').value;
  
    if (!movieName.trim()) {
      alert('Please enter a valid movie name.');
      return;
    }
  
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: movieName })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Movie added successfully!');
          document.getElementById('movie-name').value = '';
        } else {
          alert('Failed to add movie.');
        }
      })
      .catch(error => console.error('Error adding movie:', error));
  }
  
  // Remove an existing movie
  function removeMovie() {
    const movieName = document.getElementById('movie-name-remove').value;
  
    if (!movieName.trim()) {
      alert('Please enter a valid movie name to remove.');
      return;
    }
  
    fetch('http://localhost:3000/movies', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: movieName })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Movie removed successfully!');
          document.getElementById('movie-name-remove').value = '';
        } else {
          alert('Failed to remove movie.');
        }
      })
      .catch(error => console.error('Error removing movie:', error));
  }
  
  // Load all reviews
  function loadReviews() {
    fetch('http://localhost:3000/reviews')
      .then(response => response.json())
      .then(data => {
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '<h3>All Reviews</h3>';
        data.reviews.forEach(review => {
          reviewList.innerHTML += `<p>Movie ID: ${review.MovieID}, Review: ${review.ReviewText}, Rating: ${review.Rating}</p>`;
        });
      })
      .catch(error => console.error('Error loading reviews:', error));
  }
  