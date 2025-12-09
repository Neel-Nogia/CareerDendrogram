// Dashboard JavaScript

// Check authentication
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
        return null;
    }
    return JSON.parse(currentUser);
}

// Load user data
function loadUserData() {
    const user = checkAuth();
    if (user) {
        document.getElementById('userName').textContent = user.fullname || user.email.split('@')[0];
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Logout function
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

// Open chatbot
function openChatbot() {
    toggleChatbot();
}

// Chatbot toggle
function toggleChatbot() {
    const chatbot = document.getElementById('chatbotContainer');
    chatbot.classList.toggle('active');
    
    if (chatbot.classList.contains('active')) {
        document.getElementById('chatInput').focus();
        // Remove notification badge
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            badge.style.display = 'none';
        }
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('navMenu');
        const mobileToggle = document.querySelector('.mobile-toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        }
    });
});
