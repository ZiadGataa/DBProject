// Handle login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
  
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = 'dashboard.html'; // Redirect on success
        } else {
          document.getElementById('login-error-msg').style.display = 'block';
          document.getElementById('error-msg-second-line').textContent = data.message || "Invalid email and/or password.";
        }
      })
      .catch(error => console.error('Error:', error));
  });
  
  // Handle registration
  function handleRegistration() {
    const name = document.getElementById('register-name').value;
    const age = document.getElementById('register-age').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const isAdmin = document.getElementById('is-admin').checked;
    const isReviewer = document.getElementById('is-reviewer').checked;
  
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, email, password, isAdmin, isReviewer })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Registration successful! You can now log in.');
          window.location.href = 'login.html';
        } else {
          alert(data.error || 'Registration failed.');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  