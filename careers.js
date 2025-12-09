// Careers Page JavaScript

const careersData = [
    {
        id: 1,
        title: "AI/ML Engineer",
        category: "Technology",
        icon: "fa-robot",
        description: "Design, develop, and deploy artificial intelligence and machine learning models. Work on cutting-edge technologies like deep learning, neural networks, and data analytics.",
        skills: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Data Analysis", "Statistics"],
        education: "B.Tech/M.Tech in CSE, AI, ML, or related fields",
        salaryRange: "₹6-45 LPA",
        salaryDetails: "Freshers: ₹6-9 LPA | Senior: ₹25-45+ LPA",
        jobOutlook: "Excellent - High demand with 45% growth projected by 2030",
        topColleges: ["IIT Bombay", "IIIT Hyderabad", "Ganpat University", "IIT Delhi", "VIT Vellore"]
    },
    {
        id: 2,
        title: "Data Scientist",
        category: "Technology",
        icon: "fa-chart-line",
        description: "Analyze complex data to help organizations make better decisions. Use statistical methods, ML algorithms, and data visualization to extract insights.",
        skills: ["Python", "R", "SQL", "Machine Learning", "Statistics", "Data Visualization", "Big Data"],
        education: "B.Tech/M.Tech in CSE, Data Science, or M.Sc in Data Science",
        salaryRange: "₹5-40 LPA",
        salaryDetails: "Freshers: ₹5-8 LPA | Senior: ₹20-40+ LPA",
        jobOutlook: "Excellent - 35% growth, high demand across industries",
        topColleges: ["IIT Madras", "IIIT Hyderabad", "Ganpat University", "DTU Delhi", "VIT Vellore"]
    },
    {
        id: 3,
        title: "Software Engineer",
        category: "Technology",
        icon: "fa-code",
        description: "Design, develop, and maintain software applications. Work on web, mobile, or enterprise applications using modern programming languages and frameworks.",
        skills: ["Programming", "Data Structures", "Algorithms", "System Design", "Java/Python/C++", "Git"],
        education: "B.Tech in CSE, IT, or related fields",
        salaryRange: "₹4-35 LPA",
        salaryDetails: "Freshers: ₹4-7 LPA | Senior: ₹15-35+ LPA",
        jobOutlook: "Very Good - Consistent demand, 25% growth",
        topColleges: ["IIT Bombay", "IIT Delhi", "NIT Surathkal", "Ganpat University", "VIT Vellore"]
    },
    {
        id: 4,
        title: "Cyber Security Specialist",
        category: "Technology",
        icon: "fa-shield-alt",
        description: "Protect organizations from cyber threats. Implement security measures, conduct penetration testing, and respond to security incidents.",
        skills: ["Network Security", "Ethical Hacking", "Cryptography", "Security Tools", "Linux", "Python"],
        education: "B.Tech in CSE with Cyber Security specialization or certifications",
        salaryRange: "₹6-45 LPA",
        salaryDetails: "Freshers: ₹6-10 LPA | Senior: ₹20-45+ LPA",
        jobOutlook: "Excellent - Critical need, 35% growth",
        topColleges: ["Ganpat University", "IIT Delhi", "NIT Surathkal", "VIT Vellore"]
    },
    {
        id: 5,
        title: "Robotics Engineer",
        category: "Technology",
        icon: "fa-robot",
        description: "Design and build robots and automated systems. Work on AI-powered robotics, autonomous vehicles, and industrial automation.",
        skills: ["Robotics", "AI", "Computer Vision", "Control Systems", "C++", "Python", "Electronics"],
        education: "B.Tech/M.Tech in Robotics, Computer Engineering, or Electronics",
        salaryRange: "₹7-50 LPA",
        salaryDetails: "Freshers: ₹7-12 LPA | Senior: ₹25-50+ LPA",
        jobOutlook: "Excellent - Emerging field with 40% growth",
        topColleges: ["IIT Bombay", "IIT Madras", "Ganpat University", "IIIT Hyderabad"]
    },
    {
        id: 6,
        title: "Doctor (MBBS)",
        category: "Medical",
        icon: "fa-user-md",
        description: "Diagnose and treat illnesses, perform surgeries, and provide medical care to patients. Specialize in various medical fields.",
        skills: ["Medical Knowledge", "Patient Care", "Diagnosis", "Surgery", "Communication", "Empathy"],
        education: "MBBS (5.5 years) + MD/MS for specialization (3 years)",
        salaryRange: "₹6-100+ LPA",
        salaryDetails: "Freshers: ₹6-12 LPA | Specialists: ₹30-100+ LPA",
        jobOutlook: "Excellent - Always in demand, critical profession",
        topColleges: ["AIIMS Delhi", "CMC Vellore", "JIPMER", "KGMU Lucknow"]
    },
    {
        id: 7,
        title: "Architect",
        category: "Design",
        icon: "fa-drafting-compass",
        description: "Design buildings and structures, create blueprints, and oversee construction projects. Combine creativity with technical knowledge.",
        skills: ["AutoCAD", "3D Modeling", "Design Principles", "Construction Knowledge", "Creativity", "SketchUp"],
        education: "B.Arch (5 years) + Registration with Council of Architecture",
        salaryRange: "₹4-30 LPA",
        salaryDetails: "Freshers: ₹4-8 LPA | Senior: ₹15-30+ LPA",
        jobOutlook: "Good - Steady demand in urban development",
        topColleges: ["IIT Kharagpur", "SPA Delhi", "CEPT Ahmedabad", "NIT Trichy"]
    },
    {
        id: 8,
        title: "Product Designer",
        category: "Design",
        icon: "fa-palette",
        description: "Create user-friendly product designs for digital and physical products. Focus on UX/UI design and user experience.",
        skills: ["UI/UX Design", "Figma", "Adobe XD", "User Research", "Prototyping", "Creativity"],
        education: "B.Des, B.Tech with design focus, or specialized design courses",
        salaryRange: "₹5-35 LPA",
        salaryDetails: "Freshers: ₹5-8 LPA | Senior: ₹15-35+ LPA",
        jobOutlook: "Very Good - Growing demand in tech companies",
        topColleges: ["NID Ahmedabad", "IIT Bombay (IDC)", "MIT Pune", "Pearl Academy"]
    },
    {
        id: 9,
        title: "Research Scientist",
        category: "Science",
        icon: "fa-microscope",
        description: "Conduct research in various scientific fields, publish papers, and contribute to scientific advancement in areas like physics, chemistry, biology, or computer science.",
        skills: ["Research Methodology", "Data Analysis", "Scientific Writing", "Laboratory Skills", "Critical Thinking"],
        education: "M.Sc/M.Tech + Ph.D in relevant field",
        salaryRange: "₹8-60+ LPA",
        salaryDetails: "Academic: ₹8-20 LPA | Industry R&D: ₹15-60+ LPA",
        jobOutlook: "Good - Opportunities in academia and R&D",
        topColleges: ["IISc Bangalore", "IIT Bombay", "IIT Delhi", "IIIT Hyderabad"]
    }
];

let filteredCareers = [...careersData];

function loadCareers() {
    const grid = document.getElementById('careersGrid');
    grid.innerHTML = '';
    
    filteredCareers.forEach(career => {
        const card = createCareerCard(career);
        grid.appendChild(card);
    });
}

function createCareerCard(career) {
    const card = document.createElement('div');
    card.className = 'career-card';
    
    const skillsTags = career.skills.slice(0, 6).map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="career-header">
            <div class="career-icon"><i class="fas ${career.icon}"></i></div>
            <div class="career-title">${career.title}</div>
            <span class="career-category">${career.category}</span>
        </div>
        
        <div class="career-body">
            <p class="career-description">${career.description}</p>
            
            <div class="career-info-grid">
                <div class="info-item">
                    <i class="fas fa-graduation-cap"></i>
                    <div>
                        <strong>Education</strong>
                        <p>${career.education}</p>
                    </div>
                </div>
                
                <div class="info-item">
                    <i class="fas fa-chart-bar"></i>
                    <div>
                        <strong>Job Outlook</strong>
                        <p>${career.jobOutlook}</p>
                    </div>
                </div>
            </div>
            
            <div class="salary-range">
                <strong><i class="fas fa-rupee-sign"></i> Salary Range</strong>
                <p>${career.salaryRange}</p>
                <small style="color: #718096; font-size: 12px;">${career.salaryDetails}</small>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong style="display: block; margin-bottom: 10px; color: #2d3748;">
                    <i class="fas fa-tools" style="color: #667eea;"></i> Key Skills
                </strong>
                <div class="skills-list">${skillsTags}</div>
            </div>
            
            <button class="view-colleges-btn" onclick="viewTopColleges(${career.id})">
                <i class="fas fa-university"></i> View Top Colleges
            </button>
        </div>
    `;
    
    return card;
}

function filterCareers() {
    const searchTerm = document.getElementById('careerSearch').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    filteredCareers = careersData.filter(career => {
        const matchesSearch = 
            career.title.toLowerCase().includes(searchTerm) ||
            career.description.toLowerCase().includes(searchTerm) ||
            career.skills.some(s => s.toLowerCase().includes(searchTerm));
        
        const matchesCategory = !category || career.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    loadCareers();
}

function filterByCategory(category) {
    document.getElementById('categoryFilter').value = category;
    filterCareers();
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

function viewTopColleges(careerId) {
    const career = careersData.find(c => c.id === careerId);
    if (!career) return;
    
    const message = `Top Colleges for ${career.title}:\n\n${career.topColleges.map((c, i) => `${i + 1}. ${c}`).join('\n')}\n\nClick OK to view all colleges →`;
    
    if (confirm(message)) {
        window.location.href = 'colleges.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadCareers();
});
