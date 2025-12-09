// Authentication JavaScript

// Show/Hide Forms
function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

// Toggle Password Visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.toggle-password i');
    
    if (input.type === 'password') {
        input.type = 'text';
        button.classList.remove('fa-eye');
        button.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        button.classList.remove('fa-eye-slash');
        button.classList.add('fa-eye');
    }
}

// Initialize demo user
function initializeDemoUser() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const demoExists = users.some(u => u.email === 'demo@career.com');
    
    if (!demoExists) {
        users.push({
            id: 'demo-user-001',
            username: 'demo',
            email: 'demo@career.com',
            password: 'demo123',
            fullname: 'Demo User',
            phone: '+91 9876543210',
            interests: ['Technology', 'Engineering'],
            created_at: new Date().toISOString()
        });
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store session
        const sessionData = {
            userId: user.id,
            email: user.email,
            fullname: user.fullname,
            interests: user.interests,
            loginTime: new Date().toISOString()
        };
        
        sessionStorage.setItem('currentUser', JSON.stringify(sessionData));
        
        if (rememberMe) {
            localStorage.setItem('rememberedUser', email);
        }
        
        // Show success and redirect
        showAlert('Login successful! Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        showAlert('Invalid email or password. Please try again.', 'error');
    }
}

// Handle Registration
function handleRegister(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('regFullName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const interestsSelect = document.getElementById('regInterests');
    const interests = Array.from(interestsSelect.selectedOptions).map(option => option.value);
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validation
    if (password.length < 6) {
        showAlert('Password must be at least 6 characters long.', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showAlert('Passwords do not match.', 'error');
        return;
    }
    
    if (interests.length === 0) {
        showAlert('Please select at least one career interest.', 'error');
        return;
    }
    
    if (!agreeTerms) {
        showAlert('Please agree to the Terms & Conditions.', 'error');
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
        showAlert('An account with this email already exists.', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: 'user-' + Date.now(),
        username: email.split('@')[0],
        email: email,
        password: password, // In production, this should be hashed
        fullname: fullname,
        phone: phone,
        interests: interests,
        created_at: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showAlert('Registration successful! Please login.', 'success');
    
    // Switch to login form
    setTimeout(() => {
        showLogin();
        document.getElementById('loginEmail').value = email;
    }, 1500);
}

// Show Alert
function showAlert(message, type) {
    // Remove existing alert if any
    const existingAlert = document.querySelector('.alert-message');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    const alert = document.createElement('div');
    alert.className = `alert-message alert-${type}`;
    alert.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Style the alert
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#48bb78' : '#f56565'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// Add CSS for alert animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDemoUser();
    
    // Check for remembered user
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('loginEmail').value = rememberedUser;
        document.getElementById('rememberMe').checked = true;
    }
});
