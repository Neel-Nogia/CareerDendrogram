// Profile Page JavaScript

function loadProfile() {
    const user = checkAuth();
    if (!user) return;
    
    // Set profile header
    document.getElementById('profileName').textContent = user.fullname || 'User';
    document.getElementById('profileEmail').textContent = user.email;
    
    // Set info section
    document.getElementById('infoName').textContent = user.fullname || 'Not set';
    document.getElementById('infoEmail').textContent = user.email;
    
    // Get user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const fullUser = users.find(u => u.email === user.email);
    
    if (fullUser) {
        document.getElementById('infoPhone').textContent = fullUser.phone || 'Not set';
        
        // Format date
        const date = new Date(fullUser.created_at);
        const formattedDate = date.toLocaleDateString('en-IN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        document.getElementById('infoMemberSince').textContent = formattedDate;
        
        // Load interests
        const interestsContainer = document.getElementById('interestsTags');
        if (fullUser.interests && fullUser.interests.length > 0) {
            interestsContainer.innerHTML = fullUser.interests.map(interest => 
                `<span class="interest-tag">${interest}</span>`
            ).join('');
        } else {
            interestsContainer.innerHTML = '<p style="color: #718096;">No interests selected</p>';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadProfile();
});