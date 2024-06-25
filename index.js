document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');

  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      // Retrieve stored users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Check if user exists and credentials match
      const foundUser = users.find(user => user.email === email && user.password === password);
      if (foundUser) {
          // Clear any previous error messages
          loginError.innerText = '';

          // Redirect to home page with welcome message (you can customize this part)
          window.location.href = `home.html?name=${foundUser.name}`;
      } else {
          loginError.innerText = 'Invalid email or password';
      }
  });
});
