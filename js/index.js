const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

document.querySelector('#nav-item-1').textContent = siteContent['nav']['nav-item-1'];
document.getElementById('nav-item-2').textContent = siteContent['nav']['nav-item-2'];
document.getElementById('nav-item-3').textContent = siteContent['nav']['nav-item-3'];
document.getElementById('nav-item-4').textContent = siteContent['nav']['nav-item-4'];
document.getElementById('nav-item-5').textContent = siteContent['nav']['nav-item-5'];
document.getElementById('nav-item-6').textContent = siteContent['nav']['nav-item-6'];
const allLinks = document.querySelectorAll('header nav a');
allLinks.forEach(item => item.style.color='green');
const nav = document.querySelector('header nav');
nav.appendChild();

document.querySelector('.cta-text h1').textContent = siteContent['cta']['h1'];
document.querySelector('.cta-text button').textContent = siteContent['cta']['button'];
document.querySelector('#cta-img').setAttribute('src', siteContent['cta']['img-src']);

document.querySelector('.top-content .text-content #features-h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.top-content .text-content #features-content').textContent = siteContent['main-content']['features-content'];
document.querySelector('.top-content .text-content #about-h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.top-content .text-content #about-content').textContent = siteContent['main-content']['about-content'];

document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

document.querySelector('.bottom-content .text-content #services-h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.bottom-content .text-content #services-content').textContent = siteContent['main-content']['services-content'];
document.querySelector('.bottom-content .text-content #product-h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.bottom-content .text-content #product-content').textContent = siteContent['main-content']['product-content'];
document.querySelector('.bottom-content .text-content #vision-h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.bottom-content .text-content #vision-content').textContent = siteContent['main-content']['vision-content'];

document.querySelector('.contact #contact-h4').textContent = siteContent['contact']['contact-h4'];
document.querySelector('.contact #address').textContent = siteContent['contact']['address'];
document.querySelector('.contact #phone').textContent = siteContent['contact']['phone'];
document.querySelector('.contact #email').textContent = siteContent['contact']['email'];


document.querySelector('footer p').textContent = siteContent['footer']['copyright'];







