// Colleges Page JavaScript

// Colleges data (from API/database)
const collegesData = [
    {
        id: 1,
        name: "Ganpat University - Institute of Computer Technology",
        location: "Kherva, Mehsana, Gujarat",
        state: "Gujarat",
        type: "Private University",
        ranking: 139,
        programs: ["B.Tech CSE", "B.Tech CSE (AI & ML)", "M.Tech Computer Engineering (AI)", "MCA", "M.Sc IT (AI & ML)", "BCA Honours", "Ph.D"],
        specializations: ["Artificial Intelligence", "Machine Learning", "Data Science", "Robotics", "Cyber Security", "Cloud Computing"],
        fees: "₹1,70,000/year",
        feesNumeric: 170000,
        contact: "+91-7567020548",
        email: "admission.ict@ganpatuniversity.ac.in",
        website: "ict.guni.ac.in",
        description: "State private university with 7000+ students, 1200+ faculty, and partnerships with IBM and SAS.",
        highlights: ["7000+ Students", "1200+ Faculty", "28 Hostels", "IBM Partnership", "AI & Robotics Labs"]
    },
    {
        id: 2,
        name: "IIT Bombay",
        location: "Mumbai, Maharashtra",
        state: "Maharashtra",
        type: "Government (IIT)",
        ranking: 1,
        programs: ["B.Tech CSE", "M.Tech AI", "M.Tech Data Science", "Ph.D"],
        specializations: ["Artificial Intelligence", "Machine Learning", "Data Analytics", "Robotics", "Computer Vision"],
        fees: "₹2,00,000/year",
        feesNumeric: 200000,
        contact: "+91-22-2576-4925",
        email: "admissions@iitb.ac.in",
        website: "iitb.ac.in",
        description: "India's premier engineering institute, consistently ranked #1.",
        highlights: ["#1 Ranked", "World-Class Faculty", "Research Centers", "International Collaborations"]
    },
    {
        id: 3,
        name: "IIT Delhi",
        location: "New Delhi, Delhi",
        state: "Delhi",
        type: "Government (IIT)",
        ranking: 2,
        programs: ["B.Tech CSE", "M.Tech AI", "M.Tech ML", "Ph.D"],
        specializations: ["Artificial Intelligence", "Robotics", "Data Science", "Natural Language Processing"],
        fees: "₹2,00,000/year",
        feesNumeric: 200000,
        contact: "+91-11-2659-1749",
        email: "admissions@admin.iitd.ac.in",
        website: "iitd.ac.in",
        description: "Houses multiple research centres in AI, Robotics, and Data Science.",
        highlights: ["#2 Ranked", "AI Research Centers", "Innovation Labs", "Global Partnerships"]
    },
    {
        id: 4,
        name: "IIT Madras",
        location: "Chennai, Tamil Nadu",
        state: "Tamil Nadu",
        type: "Government (IIT)",
        ranking: 3,
        programs: ["B.Tech CSE", "M.Tech AI & ML", "Ph.D"],
        specializations: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision"],
        fees: "₹2,00,000/year",
        feesNumeric: 200000,
        contact: "+91-44-2257-8100",
        email: "admissions@iitm.ac.in",
        website: "iitm.ac.in",
        description: "Renowned for AI research and innovation with strong industry connections.",
        highlights: ["#3 Ranked", "Research Parks", "Innovation Centers", "Industry Partnerships"]
    },
    {
        id: 5,
        name: "IIIT Hyderabad",
        location: "Hyderabad, Telangana",
        state: "Telangana",
        type: "Government (IIIT)",
        ranking: 8,
        programs: ["B.Tech CSE", "M.Tech AI", "M.Tech ML", "Ph.D"],
        specializations: ["Machine Learning", "Data Analytics", "Robotics", "Natural Language Processing"],
        fees: "₹2,50,000/year",
        feesNumeric: 250000,
        contact: "+91-40-6653-1000",
        email: "admissions@iiit.ac.in",
        website: "iiit.ac.in",
        description: "Leading institute for AI and CSE research with focus on ML, data analytics, and robotics.",
        highlights: ["#8 Ranked", "Research Labs", "AI Centers", "Innovation Hub"]
    },
    {
        id: 6,
        name: "VIT Vellore",
        location: "Vellore, Tamil Nadu",
        state: "Tamil Nadu",
        type: "Private University",
        ranking: 15,
        programs: ["B.Tech CSE", "B.Tech CSE (AI & ML)", "M.Tech AI", "Ph.D"],
        specializations: ["Artificial Intelligence", "Machine Learning", "Data Science", "IoT"],
        fees: "₹1,98,000/year",
        feesNumeric: 198000,
        contact: "+91-416-220-2555",
        email: "admissions@vit.ac.in",
        website: "vit.ac.in",
        description: "One of India's top private universities with excellent placement records.",
        highlights: ["#15 Ranked", "Modern Labs", "Research Centers", "Excellent Placements"]
    },
    {
        id: 7,
        name: "NIT Surathkal",
        location: "Surathkal, Karnataka",
        state: "Karnataka",
        type: "Government (NIT)",
        ranking: 12,
        programs: ["B.Tech CSE", "M.Tech CSE", "Ph.D"],
        specializations: ["Artificial Intelligence", "Machine Learning", "Data Science", "Computer Networks"],
        fees: "₹1,50,000/year",
        feesNumeric: 150000,
        contact: "+91-824-247-3050",
        email: "admissions@nitk.ac.in",
        website: "nitk.ac.in",
        description: "Known for quality CSE education and research in AI and ML.",
        highlights: ["#12 Ranked", "Quality Education", "Research Labs", "Sports Complex"]
    },
    {
        id: 8,
        name: "DTU Delhi",
        location: "New Delhi, Delhi",
        state: "Delhi",
        type: "Government (State University)",
        ranking: 7,
        programs: ["B.Tech CSE", "B.Tech AI & ML", "M.Tech", "Ph.D"],
        specializations: ["Artificial Intelligence", "Machine Learning", "Data Science", "Software Engineering"],
        fees: "₹1,75,000/year",
        feesNumeric: 175000,
        contact: "+91-11-2787-1120",
        email: "admissions@dtu.ac.in",
        website: "dtu.ac.in",
        description: "Offers excellent CSE and AI programs with strong industry links.",
        highlights: ["#7 Ranked", "Research Centers", "Industry Links", "Placement Cell"]
    }
];

let filteredColleges = [...collegesData];

// Load colleges
function loadColleges() {
    const grid = document.getElementById('collegesGrid');
    grid.innerHTML = '';
    
    if (filteredColleges.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        grid.style.display = 'none';
        return;
    }
    
    document.getElementById('noResults').style.display = 'none';
    grid.style.display = 'grid';
    
    filteredColleges.forEach(college => {
        const card = createCollegeCard(college);
        grid.appendChild(card);
    });
    
    updateResultCount();
}

// Create college card
function createCollegeCard(college) {
    const card = document.createElement('div');
    card.className = 'college-card';
    
    const specializationTags = college.specializations.slice(0, 4).map(spec => 
        `<span class="spec-tag">${spec}</span>`
    ).join('');
    
    const highlightsList = college.highlights.slice(0, 3).map(highlight =>
        `<div class="contact-item"><i class="fas fa-check-circle"></i> ${highlight}</div>`
    ).join('');
    
    card.innerHTML = `
        <div class="college-header">
            ${college.ranking ? `<div class="college-rank">Rank #${college.ranking}</div>` : ''}
            <div class="college-icon"><i class="fas fa-university"></i></div>
            <div class="college-name">${college.name}</div>
            <div class="college-location">
                <i class="fas fa-map-marker-alt"></i>
                ${college.location}
            </div>
        </div>
        
        <div class="college-body">
            <span class="college-type">${college.type}</span>
            
            <div class="college-info">
                <div class="info-row">
                    <i class="fas fa-graduation-cap"></i>
                    <div>
                        <strong>Programs</strong>
                        <p>${college.programs.slice(0, 3).join(', ')}${college.programs.length > 3 ? '...' : ''}</p>
                    </div>
                </div>
                
                <div class="info-row">
                    <i class="fas fa-rupee-sign"></i>
                    <div>
                        <strong>Fees</strong>
                        <p>${college.fees}</p>
                    </div>
                </div>
            </div>
            
            <div class="college-specializations">
                <strong style="display: block; margin-bottom: 10px; color: #2d3748; font-size: 14px;">
                    <i class="fas fa-star" style="color: #667eea;"></i> Specializations
                </strong>
                <div class="specialization-tags">
                    ${specializationTags}
                </div>
            </div>
            
            <div class="college-contact">
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <a href="tel:${college.contact}">${college.contact}</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:${college.email}">${college.email}</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-globe"></i>
                    <a href="https://${college.website}" target="_blank">${college.website}</a>
                </div>
            </div>
            
            <button class="view-details-btn" onclick="viewCollegeDetails(${college.id})">
                <i class="fas fa-info-circle"></i> View Full Details
            </button>
        </div>
    `;
    
    return card;
}

// Filter colleges
function filterColleges() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const location = document.getElementById('locationFilter').value;
    const type = document.getElementById('typeFilter').value;
    const specialization = document.getElementById('specializationFilter').value;
    const sort = document.getElementById('sortFilter').value;
    
    // Filter
    filteredColleges = collegesData.filter(college => {
        const matchesSearch = 
            college.name.toLowerCase().includes(searchTerm) ||
            college.location.toLowerCase().includes(searchTerm) ||
            college.programs.some(p => p.toLowerCase().includes(searchTerm));
        
        const matchesLocation = !location || college.state === location;
        const matchesType = !type || college.type.includes(type);
        const matchesSpecialization = !specialization || 
            college.specializations.some(s => s.includes(specialization));
        
        return matchesSearch && matchesLocation && matchesType && matchesSpecialization;
    });
    
    // Sort
    if (sort === 'ranking') {
        filteredColleges.sort((a, b) => a.ranking - b.ranking);
    } else if (sort === 'name') {
        filteredColleges.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'fees') {
        filteredColleges.sort((a, b) => a.feesNumeric - b.feesNumeric);
    }
    
    loadColleges();
    updateFilterCount();
}

// Update result count
function updateResultCount() {
    document.getElementById('resultCount').textContent = filteredColleges.length;
    document.getElementById('totalColleges').textContent = collegesData.length;
}

// Update filter count
function updateFilterCount() {
    let count = 0;
    const filterCountBadge = document.getElementById('filterCount');
    
    if (document.getElementById('locationFilter').value) count++;
    if (document.getElementById('typeFilter').value) count++;
    if (document.getElementById('specializationFilter').value) count++;
    if (document.getElementById('searchInput').value) count++;
    
    if (count > 0) {
        filterCountBadge.textContent = count;
        filterCountBadge.style.display = 'flex';
    } else {
        filterCountBadge.style.display = 'none';
    }
}

// Toggle filters
function toggleFilters() {
    const container = document.getElementById('filtersContainer');
    container.classList.toggle('active');
}

// Clear filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('locationFilter').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('specializationFilter').value = '';
    document.getElementById('sortFilter').value = 'ranking';
    
    filterColleges();
}

// View college details
function viewCollegeDetails(collegeId) {
    const college = collegesData.find(c => c.id === collegeId);
    if (!college) return;
    
    const details = `
🎓 ${college.name}

📍 Location: ${college.location}
🏆 Ranking: #${college.ranking}
🏢 Type: ${college.type}

📚 Programs Offered:
${college.programs.map(p => '• ' + p).join('\n')}

🔬 Specializations:
${college.specializations.map(s => '• ' + s).join('\n')}

💰 Fees: ${college.fees}

📞 Contact:
• Phone: ${college.contact}
• Email: ${college.email}
• Website: ${college.website}

✨ Highlights:
${college.highlights.map(h => '• ' + h).join('\n')}

📖 ${college.description}
    `;
    
    alert(details);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadColleges();
});
