// script.js

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-btn');
    const registerButton = document.getElementById('register-btn');
    const updateProfileButton = document.getElementById('update-profile-btn');

    // Show user authentication section
    function showUserAuthentication() {
        const userAuthSection = document.getElementById('user-authentication');
        userAuthSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Mock user authentication (for demonstration purposes)
    function authenticateUser(isLogin) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            if (isLogin) {
                alert(`Logged in as ${email}`);
            } else {
                alert(`Registered as ${email}`);
            }
        } else {
            alert('Please enter email and password.');
        }
    }

    // Event listeners
    loginButton.addEventListener('click', () => {
        showUserAuthentication();
        authenticateUser(true);
    });

    registerButton.addEventListener('click', () => {
        showUserAuthentication();
        authenticateUser(false);
    });

    updateProfileButton.addEventListener('click', () => {
        alert('Profile updated successfully!');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
