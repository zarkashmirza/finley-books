
const closeBtn = document.querySelector("#closeBtn");
const nextBtn = document.querySelector("#nextBtn");

const lightboxImage = document.querySelector("#lightboxImage");
const lightbox = document.querySelector("#lightbox");
const lightboxTitle = document.querySelector("#bookTitle");
const lightboxAuthor = document.querySelector("#bookAuthor");
const lightboxOgPrice = document.querySelector("#ogPrice");
const lightboxNewPrice = document.querySelector("#nPrice");
const lightboxSynopsis = document.querySelector("#synopsis");

const synopses = [
  'In How To Think CSS, Michael Lewis tackles the cascading nightmare of modern styling with his trademark good-natured humor. Stop fighting specificity wars and learn to embrace the cascade before it washes away your sanity completely. This definitive guide bypasses the dry documentation to teach you how to organically communicate with your stylesheets, rather than screaming at them. Whether you are battling rogue padding or collapsing margins, Lewis offers a practical, hilarious roadmap to styling without the tears.',
  'Delve into the philosophical abyss of front-end logic with Existential Javascript: Who Am I?. Lewis brilliantly weaponizes the infamous this keyword, turning a ubiquitous coding frustration into a profound exploration of identity and lexical scope. Through witty anecdotes and confusing callbacks, readers will learn to navigate the murky, unpredictable waters of asynchronous dread. It is the ultimate survival manual for developers who have ever stared at their console logs and deeply questioned their own reality.',
  "Centering A Div: A Memoir is a triumphant, hilarious recounting of one man's lifelong battle against vertical and horizontal alignment. Lewis chronicles the dark, early days of table layouts and clearfixes, leading up to his eventual, hard-won enlightenment via Flexbox. Filled with self-deprecating wit and tales of late-night coding despair, this memoir is deeply relatable to anyone who has ever refreshed a browser only to find their content entirely off-screen. It stands as a powerful testament to human resilience in the face of absolute positioning.",
  'Step out of the chaotic past and into structural harmony with Float: NONE (A Guide to Staying Grounded in a Grid World). Lewis delivers a sharp, satirical takedown of outdated float-based layouts, advocating instead for the structural sanity of modern Grid environments. He provides a humorous, step-by-step methodology for anchoring your DOM elements so they stop flying across the viewport unexpectedly. Perfect for recovering float-abusers, this manifesto will help you build solid, predictable frameworks that finally stay exactly where you put them.'
];

let currentIndex = 0;

let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) { // open the menu
    $('nav').animate({
      right: 0
    }, 500, 'swing');
    $('#hamburger').addClass('open'); // this triggers the CSS that translates the hamburger bars
  }
  else { // close the menu
    $('nav').animate({
      right: '-100vw'
    }, 500, 'swing');
    $('#hamburger').removeClass('open'); // this returns the hamburger bars to their og state
  }
  // toggle the menu state
  menuOpen = !menuOpen;
} // toggleMenu()

function closeMenu() {
  $('nav').animate({
    right: '-100vw'
  }, 240, 'swing');
  menuOpen = false;
  $('#hamburger').removeClass('open');
} // closeMenu()

const hiddenSections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  })
}) 
hiddenSections.forEach(section => {
      observer.observe(section);
    });

const cards = document.querySelectorAll(".shopCard");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    
    currentIndex = index;

    //read/write img
    const image = card.querySelector("img");
    const imageSrc = image.src;
    lightboxImage.src = imageSrc;
    lightbox.style.display = "grid";

    //read/write title
    const title = card.querySelector(".bookTitle");
    const titleText = title.textContent;
    lightboxTitle.textContent = titleText;
  
    //read/write author name
    const author = card.querySelector(".bookAuthor");
    const authorText = author.textContent;
    lightboxAuthor.textContent = authorText;

    //read/write original price
    const originalPrice = card.querySelector(".originalPrice");
    const originalPriceText = originalPrice.textContent;
    lightboxOgPrice.textContent = originalPriceText;

    //read/write new price
    const salePrice = card.querySelector(".salePrice");
    const salePriceText = salePrice.textContent;
    lightboxNewPrice.textContent = salePriceText;

    //write synopsis
    lightboxSynopsis.textContent = synopses[index];

  });
});

//close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

//next card
nextBtn.addEventListener("click", () => {
  currentIndex++;

  // reset to beginning after last card
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
  
  //read/write next img
    const image = cards[currentIndex].querySelector("img");
    const imageSrc = image.src;
    lightboxImage.src = imageSrc;
    lightbox.style.display = "grid";

    //read/write next title
    const title = cards[currentIndex].querySelector(".bookTitle");
    const titleText = title.textContent;
    lightboxTitle.textContent = titleText;
  
    //read/write next author name
    const author = cards[currentIndex].querySelector(".bookAuthor");
    const authorText = author.textContent;
    lightboxAuthor.textContent = authorText;

    //read/write next original price
    const originalPrice = cards[currentIndex].querySelector(".originalPrice");
    const originalPriceText = originalPrice.textContent;
    lightboxOgPrice.textContent = originalPriceText;

    //read/write next new price
    const salePrice = cards[currentIndex].querySelector(".salePrice");
    const salePriceText = salePrice.textContent;
    lightboxNewPrice.textContent = salePriceText;

    //write next synopsis
    lightboxSynopsis.textContent = synopses[currentIndex];

});