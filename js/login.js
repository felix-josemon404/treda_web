// Get Elements
const userLoginBtn = document.getElementById('userLoginBtn');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const loginDescription = document.getElementById('login-description');
const loginButton = document.getElementById('loginButton');

// Track the current login type
let isAdminLogin = true;  // Default to Admin login

// Toggle functionality
userLoginBtn.addEventListener('click', () => {
    isAdminLogin = false; // Set to User Login
    userLoginBtn.classList.add('active');
    adminLoginBtn.classList.remove('active');

    loginDescription.textContent = 'Login as a user to access courses, content, and resources.';
    loginButton.textContent = 'Sign In as User';
});

adminLoginBtn.addEventListener('click', () => {
    isAdminLogin = true; // Set to Admin Login
    adminLoginBtn.classList.add('active');
    userLoginBtn.classList.remove('active');

    loginDescription.textContent = 'Login as an administrator to manage courses, feedback, and users.';
    loginButton.textContent = 'Sign In as Admin';
});

// Form Submission Logic
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    // Authentication logic (Mock logic for now)
    if (isAdminLogin) {
        if (email === 'admin@example.com' && password === 'admin123') {
            alert('Admin Login Successful! Redirecting to Admin Dashboard...');
            window.location.href = 'admin_dashboard.html'; // Ensure this file exists
        } else {
            alert('Invalid Admin credentials. Please try again.');
        }
    } else {
        if (email === 'user@example.com' && password === 'user123') {
            alert('User Login Successful! Redirecting to Home Page...');
            window.location.href = 'home.html'; // Ensure this file exists
        } else {
            alert('Invalid User credentials. Please try again.');
        }
    }
});
