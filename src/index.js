const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};


// Header

const logoImg = document.querySelector(`#logo-img`);
logoImg.src = siteContent.images[`logo-img`];

const navs = document.querySelectorAll(`a`);
navs.forEach((nav, i) => {
  nav.classList.add(`italic`);
  nav.textContent = siteContent.nav[`nav-item-${i + 1}`];
})

// H1 and Button

const onlyH1 = document.querySelector(`.cta-text h1`);
onlyH1.textContent = siteContent.cta[`h1`];

const button1 = document.querySelector(`.cta-text button`);
button1.textContent = siteContent.cta[`button`];

// Body Images

const snippet = document.querySelector(`#cta-img`);
snippet.src = siteContent.images[`cta-img`];

const middleImg = document.querySelector(`#middle-img`);
middleImg.src = siteContent.images[`accent-img`]

// H4's

const h4Elements = document.querySelectorAll(`.text-content h4`);
const pElements = document.querySelectorAll(`.text-content p`)
const values = Object.values(siteContent["main-content"]);

for (let i = 0; i < values.length; i++) {
  if (i % 2 === 0) {
    h4Elements[i / 2].textContent = values[i];
  } else {
    pElements[Math.floor(i / 2)].textContent = values[i];
  }
}


// contact

// Select the h4 element with a class of "contact"
const contactHeading = document.querySelector('.contact h4');

// Update the text content of the h4 element using the "contact-h4" key from siteContent
contactHeading.textContent = siteContent.contact['contact-h4'];

// Select the p elements with a class of "contact"
const contactInfo = document.querySelectorAll('.contact p');

// Loop through the p elements and update their text content using the keys from siteContent
contactInfo.forEach((p, i) => {
  p.textContent = siteContent.contact[Object.keys(siteContent.contact)[i + 1]];
});


const footer = document.querySelector(`footer a`);
footer.textContent = siteContent.footer.copyright;
footer.className = `bold`;



// end
