// alert("Hello world")
let portfolioData = [];

const project1 = {
  name: 'E-commerce Website',
  description: 'Designed and developed an online store for a fashion brand..',
  image: 'https://www.qed42.com/sites/default/files/styles/2640x1320/public/2022-02/Best%20Practices%20For%20eCommerce%20Website%20Design.webp?itok=xACdB2Ov'
};

const project2 = {
  name: 'Mobile App',
  description: 'Created a fitness tracking app with real-time data analysis.',
  image: 'https://www.netsolutions.com/insights/wp-content/uploads/2019/07/building-a-fitness-app-essential-features-needed-for-success.jpg'
};
const project3 = {
    name: 'Consulting Services',
    description: "Provided technology consulting for a startup's growth strategy.",
    image: 'https://www.consultantsreview.com/newstransfer/upload/ftoywrsz_business_consultant.jpg'
  };

portfolioData.push(project1, project2, project3);

const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'John Doe is the CEO & Founder of our company...',
      photo: 'https://st4.depositphotos.com/13193658/30158/i/1600/depositphotos_301585594-stock-photo-handsome-businessman-formal-wear-smiling.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      bio: 'Jane Smith is the Lead Developer of our company...',
      photo: 'https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?w=900&t=st=1690990606~exp=1690991206~hmac=93005369044c78748e71d14b23b89014c579e9244485de2657b3a2dbabcb33cf'
    },
    {
        name: 'Michael Johnson',
        role: 'UX/UI Designer',
        bio: 'Michael Johnson is the UX/UI Designer of our company...',
        photo: 'https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?w=900&t=st=1690990632~exp=1690991232~hmac=a1fbfa2a69f7529a4653c3c5bedebc21ef2503b9f284de3ac88c8d11cb795f79'
      }
    // Add more team members as needed
  ];
const services = [
    {
      name: 'Service 1',
      description: 'This is the description of Service 1.',
      price: 99.99,
      duration: '1 hour'
    },
    {
      name: 'Service 2',
      description: 'This is the description of Service 2.',
      price: 149.99,
      duration: '2 hours'
    },
    {
        name: 'Service 3',
        description: 'This is the description of Service 3.',
        price: 199.99,
        duration: '2 hours'
      }
  ];
// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
});

function generateServicesSection() {
    const container = document.getElementById('services-container');
  
    container.innerHTML = '';

    for (const key in services) {
      if (services.hasOwnProperty(key)) {
        const service = services[key];
  
        const serviceElement = document.createElement('div');

        serviceElement.className = 'service';
  
        serviceElement.innerHTML = `
        <div class="col-md-12">
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <p>Price: $${service.price}</p>
          <p>Duration: ${service.duration}</p>
        </div>`;
 
        container.appendChild(serviceElement);
      }
    }
  }
 
  generateServicesSection();

  function fetchTeamMembers() {
    const teamMembersContainer = document.getElementById('team-members');
        teamMembers.forEach(member => {
          const memberElement = document.createElement('div');
          memberElement.className = 'col-md-4';
          memberElement.innerHTML = `
         
            <h3>${member.name}</h3>
            <p><strong>Role:</strong> ${member.role}</p>
            <p>${member.bio}</p>
            <img  src="${member.photo}" alt="${member.name}" class="img-fluid rounded-circle mb-3">
            `;
          teamMembersContainer.appendChild(memberElement);
        });  
  }
  
  // Call the function when the page loads
  fetchTeamMembers();

  function fetchPortfolioProjects() {
    
        const portfolioContainer = document.getElementById('portfolio-container');
        let projectMarkup = '';
  
        portfolioData.forEach(project => {
        projectMarkup += `
        <div class="col-md-4">
            <div class="card mb-4">
                <img  src="${project.image}" alt="${project.name}" >
                <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                <p class="card-text">${project.description}</p>
                </div>
            </div>
        </div>
        `;
        });
  
        portfolioContainer.innerHTML = projectMarkup;
    
  }
  
  // Call the function when the page loads
  fetchPortfolioProjects();
 
