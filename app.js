const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (username === savedUsername && password === savedPassword) {
    alert('You have successfully logged in!');
  } else {
    alert('Invalid username or password!');
  }
});

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newUsername = document.getElementById('new-username').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmedPassword = document.getElementById('confirm-password').value;

  if (newPassword !== confirmedPassword) {
    alert('Passwords do not match!');
    return;
  }

  localStorage.setItem('username', newUsername);
  localStorage.setItem('password', newPassword);
  alert('Registration successful!');
});
