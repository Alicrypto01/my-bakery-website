//image carousel 
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function changeImage() {
  // Remove 'active' class from current image
  images[currentImageIndex].classList.remove('active');

  // Calculate next image index
  currentImageIndex = (currentImageIndex + 1) % totalImages;

  // Add 'active' class to  next 
  images[currentImageIndex].classList.add('active');
}

//show the first image
images[currentImageIndex].classList.add('active');

// Change every 4 seconds
setInterval(changeImage, 4000);

// Scroll events to change active class in navbar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
// Hover effect
const tabs = document.querySelectorAll('.tab');

// Iterate tabs
tabs.forEach(tab => {
  const title = tab.querySelector('.tab-title');
  const content = tab.querySelector('.tab-content');
  
  // Initially, hide tab contents
  content.style.display = 'none';

  // When the tab title is hovered
  title.addEventListener('mouseenter', () => {
    tabs.forEach(otherTab => {
      const otherContent = otherTab.querySelector('.tab-content');
      otherContent.style.display = 'none';
      otherContent.style.border = 'none';
    });

    // Show content of the hovered tab
    content.style.display = 'block';
  });
  title.addEventListener('mouseleave', () => {
    content.style.display = 'none';
  });
});
