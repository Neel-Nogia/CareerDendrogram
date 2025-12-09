// AI Chatbot JavaScript with Keyword Matching

// Chatbot knowledge base
const chatbotKnowledge = {
    // Greetings
    greetings: {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste'],
        responses: [
            "Hello! 👋 I'm here to help you with your career questions. What would you like to know?",
            "Hi there! How can I assist you in your career journey today?",
            "Hey! Welcome! I can help you with college information, career guidance, and more. What are you interested in?"
        ]
    },
    
    // AI/ML Career
    aiml: {
        keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'neural network', 'ai career', 'ml engineer'],
        responses: [
            "🤖 AI/ML Engineering is one of the hottest careers right now!\n\n💰 Salary Range: ₹6-45 LPA (Freshers: ₹6-9 LPA, Senior: ₹25-45+ LPA)\n\n📚 Education: B.Tech/M.Tech in CSE, AI, ML\n\n🎓 Top Colleges:\n• IIT Bombay\n• IIIT Hyderabad\n• Ganpat University\n• IIT Delhi\n• VIT Vellore\n\n🔧 Key Skills: Python, TensorFlow, PyTorch, Deep Learning, Statistics\n\nWould you like more details about any specific aspect?"
        ]
    },
    
    // Data Science
    datascience: {
        keywords: ['data science', 'data scientist', 'data analytics', 'big data', 'data analyst'],
        responses: [
            "📊 Data Science is an excellent career choice!\n\n💰 Salary Range: ₹5-40 LPA (Freshers: ₹5-8 LPA, Senior: ₹20-40+ LPA)\n\n📚 Education: B.Tech/M.Tech in CSE, Data Science, or M.Sc in Data Science\n\n🎓 Top Colleges:\n• IIT Madras\n• IIIT Hyderabad\n• Ganpat University\n• DTU Delhi\n• VIT Vellore\n\n🔧 Key Skills: Python, R, SQL, Machine Learning, Statistics, Data Visualization\n\n📈 Job Outlook: Excellent - 35% growth expected!\n\nNeed more information?"
        ]
    },
    
    // Software Engineering
    software: {
        keywords: ['software engineer', 'software developer', 'programmer', 'coding', 'development', 'web developer'],
        responses: [
            "💻 Software Engineering offers diverse opportunities!\n\n💰 Salary Range: ₹4-35 LPA (Freshers: ₹4-7 LPA, Senior: ₹15-35+ LPA)\n\n📚 Education: B.Tech in CSE, IT, or related fields\n\n🎓 Top Colleges:\n• IIT Bombay\n• IIT Delhi\n• NIT Surathkal\n• Ganpat University\n• VIT Vellore\n\n🔧 Key Skills: Programming (Java/Python/C++), Data Structures, Algorithms, System Design\n\n📈 Job Outlook: Very Good - 25% growth with consistent demand\n\nWhat else would you like to know?"
        ]
    },
    
    // Cyber Security
    cybersecurity: {
        keywords: ['cyber security', 'cybersecurity', 'ethical hacking', 'security', 'hacker', 'penetration testing'],
        responses: [
            "🔒 Cyber Security is a critical and growing field!\n\n💰 Salary Range: ₹6-45 LPA (Freshers: ₹6-10 LPA, Senior: ₹20-45+ LPA)\n\n📚 Education: B.Tech in CSE with Cyber Security specialization + certifications\n\n🎓 Top Colleges:\n• Ganpat University\n• IIT Delhi\n• NIT Surathkal\n• VIT Vellore\n\n🔧 Key Skills: Network Security, Ethical Hacking, Cryptography, Linux, Python\n\n📈 Job Outlook: Excellent - Critical need with 35% growth\n\nInterested in learning more?"
        ]
    },
    
    // Robotics
    robotics: {
        keywords: ['robotics', 'robot', 'automation', 'robotics engineer'],
        responses: [
            "🤖 Robotics Engineering is an exciting emerging field!\n\n💰 Salary Range: ₹7-50 LPA (Freshers: ₹7-12 LPA, Senior: ₹25-50+ LPA)\n\n📚 Education: B.Tech/M.Tech in Robotics, Computer Engineering, or Electronics\n\n🎓 Top Colleges:\n• IIT Bombay\n• IIT Madras\n• Ganpat University\n• IIIT Hyderabad\n\n🔧 Key Skills: Robotics, AI, Computer Vision, Control Systems, C++, Python\n\n📈 Job Outlook: Excellent - 40% growth in emerging field\n\nWant to explore more?"
        ]
    },
    
    // Ganpat University
    ganpat: {
        keywords: ['ganpat', 'ganpat university', 'guni', 'kherva', 'mehsana', 'ict ganpat'],
        responses: [
            "🎓 Ganpat University - Institute of Computer Technology\n\n📍 Location: Kherva, Mehsana, Gujarat\n\n📚 Programs:\n• B.Tech CSE\n• B.Tech CSE (AI & ML)\n• M.Tech Computer Engineering (AI)\n• MCA\n• M.Sc IT (AI & ML)\n• BCA Honours (AI & ML)\n• Ph.D\n\n💰 Fees: ₹1,70,000/year for B.Tech CSE (AI & ML)\n\n📞 Contact:\n• Phone: +91-7567020548, +91-7990981219\n• Email: admission.ict@ganpatuniversity.ac.in\n• Website: ict.guni.ac.in\n\n✨ Highlights:\n• 7000+ students\n• 1200+ faculty members\n• 28 hostels (7800 capacity)\n• AI & Robotics Labs\n• IBM & SAS partnerships\n• Strong placement record\n\n🔬 Specializations: AI, ML, Data Science, Robotics, Cyber Security, Cloud Computing\n\nWould you like admission details or more information?"
        ]
    },
    
    // IIT Colleges
    iit: {
        keywords: ['iit', 'iit bombay', 'iit delhi', 'iit madras', 'indian institute of technology'],
        responses: [
            "🏆 IITs are India's premier engineering institutes!\n\n🎓 Top IITs for CSE/AI:\n\n1️⃣ IIT Bombay (Rank #1)\n• Location: Mumbai, Maharashtra\n• Programs: B.Tech CSE, M.Tech AI, Ph.D\n• Fees: ~₹2,00,000/year\n• Contact: +91-22-2576-4925\n\n2️⃣ IIT Delhi (Rank #2)\n• Location: New Delhi\n• Programs: B.Tech CSE, M.Tech AI/ML\n• Research Centers: AI, Robotics, Data Science\n• Contact: +91-11-2659-1749\n\n3️⃣ IIT Madras (Rank #3)\n• Location: Chennai, Tamil Nadu\n• Strong in AI research and innovation\n• Contact: +91-44-2257-8100\n\n📝 Admission: JEE Advanced\n\nWant details about a specific IIT?"
        ]
    },
    
    // Colleges General
    colleges: {
        keywords: ['college', 'university', 'institute', 'top colleges', 'best colleges', 'engineering colleges'],
        responses: [
            "🎓 Top Engineering Colleges for CSE/AI/ML:\n\n🏆 Government Institutes:\n• IIT Bombay - Mumbai (#1)\n• IIT Delhi - New Delhi (#2)\n• IIT Madras - Chennai (#3)\n• IIIT Hyderabad - Hyderabad (#8)\n• NIT Surathkal - Karnataka (#12)\n• DTU Delhi - New Delhi (#7)\n\n🏢 Private Universities:\n• Ganpat University - Gujarat\n• VIT Vellore - Tamil Nadu (#15)\n\n💡 All offer excellent CSE, AI, and ML programs!\n\nWould you like detailed information about any specific college?"
        ]
    },
    
    // Admission Process
    admission: {
        keywords: ['admission', 'how to apply', 'application', 'eligibility', 'entrance exam', 'jee', 'gujcet'],
        responses: [
            "📝 Admission Process Guide:\n\n🎓 For Ganpat University:\n• Eligibility: 10+2 with 45% marks\n• Entrance: JEE Main/GUJCET\n• Process: Online application through ACPC\n• Contact: +91-7567020548\n\n🎓 For IITs:\n• Entrance: JEE Main → JEE Advanced\n• Eligibility: 10+2 with 75% marks (70% for reserved)\n• Counseling: JoSAA\n\n🎓 For NITs:\n• Entrance: JEE Main\n• Counseling: JoSAA\n\n💡 Tip: Start preparing early and take mock tests!\n\nNeed specific admission details for a college?"
        ]
    },
    
    // Fees Information
    fees: {
        keywords: ['fees', 'fee structure', 'cost', 'tuition', 'how much', 'price', 'expensive'],
        responses: [
            "💰 Fee Structure for Top Colleges:\n\n🎓 Ganpat University:\n• B.Tech CSE (AI & ML): ₹1,70,000/year\n• B.Tech Computer Engineering: ₹1,60,000/year\n\n🎓 IITs (Government):\n• B.Tech: ~₹2,00,000/year\n• Very affordable with scholarships\n\n🎓 VIT Vellore (Private):\n• B.Tech: ~₹1,98,000/year\n\n🎓 IIIT Hyderabad:\n• B.Tech: ~₹2,50,000/year\n\n💡 Note: Many colleges offer scholarships and financial aid!\n\nWant to know about scholarships?"
        ]
    },
    
    // Salary Information
    salary: {
        keywords: ['salary', 'package', 'pay', 'earning', 'income', 'ctc', 'lpa', 'placement'],
        responses: [
            "💰 Salary Ranges by Career (India):\n\n🤖 AI/ML Engineer:\n• Freshers: ₹6-9 LPA\n• Mid-level: ₹12-20 LPA\n• Senior: ₹25-45+ LPA\n\n📊 Data Scientist:\n• Freshers: ₹5-8 LPA\n• Mid-level: ₹10-18 LPA\n• Senior: ₹20-40+ LPA\n\n💻 Software Engineer:\n• Freshers: ₹4-7 LPA\n• Mid-level: ₹10-18 LPA\n• Senior: ₹15-35+ LPA\n\n🔒 Cyber Security:\n• Freshers: ₹6-10 LPA\n• Senior: ₹20-45+ LPA\n\n💡 Salaries vary by company, location, and skills!\n\nWant to know about a specific career?"
        ]
    },
    
    // Career Guidance
    career: {
        keywords: ['career', 'job', 'profession', 'what should i do', 'career guidance', 'career path'],
        responses: [
            "🎯 Career Guidance:\n\nPopular career paths we cover:\n\n💻 Technology:\n• AI/ML Engineer\n• Data Scientist\n• Software Engineer\n• Cyber Security Specialist\n• Robotics Engineer\n\n🏥 Medical:\n• Doctor (MBBS)\n• Surgeon\n• Medical Researcher\n\n🏗️ Engineering:\n• Civil Engineer\n• Mechanical Engineer\n• Electrical Engineer\n\n🎨 Design:\n• Product Designer\n• UI/UX Designer\n• Architect\n\n🔬 Science:\n• Research Scientist\n\n💡 What interests you the most? I can provide detailed information!"
        ]
    },
    
    // Skills Required
    skills: {
        keywords: ['skills', 'learn', 'prepare', 'preparation', 'what to study'],
        responses: [
            "🎓 Essential Skills by Field:\n\n💻 For AI/ML:\n• Programming: Python, R\n• Libraries: TensorFlow, PyTorch, Scikit-learn\n• Math: Statistics, Linear Algebra, Calculus\n• Tools: Jupyter, Git\n\n📊 For Data Science:\n• Python, R, SQL\n• Data Visualization (Matplotlib, Tableau)\n• Statistics & Probability\n• Machine Learning basics\n\n💻 For Software Development:\n• Programming (Java, Python, C++)\n• Data Structures & Algorithms\n• System Design\n• Git, Databases\n\n🔒 For Cyber Security:\n• Networking fundamentals\n• Linux/Unix\n• Security tools (Kali Linux, Metasploit)\n• Programming (Python, Bash)\n• Certifications (CEH, CISSP)\n\n💡 Start with online courses on Coursera, Udemy, or YouTube!\n\nNeed specific learning resources?"
        ]
    },
    
    // Contact Information
    contact: {
        keywords: ['contact', 'phone', 'email', 'reach', 'call', 'number'],
        responses: [
            "📞 Contact Information:\n\n🎓 Ganpat University ICT:\n• Phone: +91-7567020548, +91-7990981219, +91-9033622246\n• Email: admission.ict@ganpatuniversity.ac.in\n• Website: ict.guni.ac.in\n\n🎓 IIT Bombay:\n• Phone: +91-22-2576-4925\n• Email: admissions@iitb.ac.in\n\n🎓 IIT Delhi:\n• Phone: +91-11-2659-1749\n• Email: admissions@admin.iitd.ac.in\n\n💡 Visit college websites for more details!\n\nNeed contact info for another college?"
        ]
    },
    
    // Thanks
    thanks: {
        keywords: ['thank', 'thanks', 'thank you', 'appreciate'],
        responses: [
            "You're welcome! 😊 Feel free to ask if you have more questions!",
            "Happy to help! 🎓 Let me know if you need anything else!",
            "Glad I could assist! 👍 Don't hesitate to ask more questions!"
        ]
    }
};

// Send message function
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Process and respond
    setTimeout(() => {
        const response = getResponse(message);
        hideTypingIndicator();
        addMessage(response, 'bot');
    }, 1000);
}

// Quick reply function
function sendQuickReply(message) {
    sendMessage();
    document.getElementById('chatInput').value = message;
    sendMessage();
}

// Handle enter key
function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i>
        </div>
        <div class="message-content">
            <p>${text.replace(/\n/g, '<br>')}</p>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbotMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator-container';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Get response based on keywords
function getResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check each knowledge category
    for (const category in chatbotKnowledge) {
        const { keywords, responses } = chatbotKnowledge[category];
        
        // Check if any keyword matches
        if (keywords.some(keyword => lowerMessage.includes(keyword))) {
            // Return random response from category
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Default response if no match
    return `I understand you're asking about "${message}". 🤔\n\nI can help you with:\n• Career information (AI, Data Science, Software, etc.)\n• College details (Ganpat University, IITs, NITs)\n• Admission processes\n• Fee structures\n• Salary expectations\n• Skills required\n\nTry asking about careers, colleges, or admissions!`;
}
