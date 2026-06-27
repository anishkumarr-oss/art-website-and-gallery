// Gallery data - This will be populated with your actual paintings
const paintings = [
    {
        id: 1,
        title: "Portrait Study 1",
        category: "portrait",
        image: "../anish art/praful sawant 2025/IMG_20250928_112939.jpg",
        description: "A beautiful portrait capturing emotion and depth"
    },
    {
        id: 2,
        title: "Landscape Dreams",
        category: "landscape",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0057.jpg",
        description: "Serene landscape painting"
    },
    {
        id: 3,
        title: "Abstract Expression",
        category: "abstract",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0059.jpg",
        description: "Bold abstract composition"
    },
    {
        id: 4,
        title: "Portrait Study 2",
        category: "portrait",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0060.jpg",
        description: "Detailed portrait work"
    },
    {
        id: 5,
        title: "Nature's Beauty",
        category: "landscape",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0062.jpg",
        description: "Capturing nature's essence"
    },
    {
        id: 6,
        title: "Color Explosion",
        category: "abstract",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0063.jpg",
        description: "Vibrant abstract piece"
    },
    {
        id: 7,
        title: "Portrait Study 3",
        category: "portrait",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0064.jpg",
        description: "Expressive portrait"
    },
    {
        id: 8,
        title: "Mountain View",
        category: "landscape",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0065.jpg",
        description: "Majestic mountain landscape"
    },
    {
        id: 9,
        title: "Abstract Flow",
        category: "abstract",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0066.jpg",
        description: "Flowing abstract forms"
    },
    {
        id: 10,
        title: "Portrait Study 4",
        category: "portrait",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0074.jpg",
        description: "Intimate portrait"
    },
    {
        id: 11,
        title: "Sunset Glow",
        category: "landscape",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0075.jpg",
        description: "Beautiful sunset scene"
    },
    {
        id: 12,
        title: "Abstract Dreams",
        category: "abstract",
        image: "../anish art/praful sawant 2025/IMG-20250922-WA0076.jpg",
        description: "Dreamy abstract composition"
    }
];

// Current lightbox index
let currentLightboxIndex = 0;
let filteredPaintings = [...paintings];

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');
const prevBtn = document.querySelector('.lightbox-nav.prev');
const nextBtn = document.querySelector('.lightbox-nav.next');
const filterBtns = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Initialize gallery
function initGallery() {
    renderGallery(paintings);
    setupEventListeners();
}

// Render gallery items
function renderGallery(items) {
    galleryGrid.innerHTML = '';
    
    items.forEach((painting, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = painting.category;
        galleryItem.dataset.index = index;
        
        galleryItem.innerHTML = `
            <img src="${painting.image}" alt="${painting.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${painting.title}</h3>
                <p>${painting.description}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

// Filter gallery
function filterGallery(category) {
    if (category === 'all') {
        filteredPaintings = [...paintings];
    } else {
        filteredPaintings = paintings.filter(painting => painting.category === category);
    }
    
    renderGallery(filteredPaintings);
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
}

// Open lightbox
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightboxModal() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Update lightbox image
function updateLightboxImage() {
    const painting = filteredPaintings[currentLightboxIndex];
    lightboxImage.src = painting.image;
    lightboxCaption.textContent = `${painting.title} - ${painting.description}`;
}

// Navigate lightbox
function navigateLightbox(direction) {
    if (direction === 'next') {
        currentLightboxIndex = (currentLightboxIndex + 1) % filteredPaintings.length;
    } else {
        currentLightboxIndex = (currentLightboxIndex - 1 + filteredPaintings.length) % filteredPaintings.length;
    }
    updateLightboxImage();
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterGallery(btn.dataset.filter);
        });
    });
    
    // Lightbox controls
    closeLightbox.addEventListener('click', closeLightboxModal);
    prevBtn.addEventListener('click', () => navigateLightbox('prev'));
    nextBtn.addEventListener('click', () => navigateLightbox('next'));
    
    // Close lightbox on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightboxModal();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox('prev');
        } else if (e.key === 'ArrowRight') {
            navigateLightbox('next');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        // For now, we'll show a success message
        alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);

// Add more paintings dynamically from your art folder
// You can add more entries to the paintings array above
// The images are referenced from "../anish art/praful sawant 2025/" folder

// Function to add more paintings programmatically
function addPainting(title, category, imagePath, description) {
    const newPainting = {
        id: paintings.length + 1,
        title: title,
        category: category,
        image: imagePath,
        description: description
    };
    paintings.push(newPainting);
    renderGallery(paintings);
}

// Example of how to add more paintings:
// addPainting("New Portrait", "portrait", "../anish art/praful sawant 2025/IMG-20250922-WA0078.jpg", "A new portrait piece");