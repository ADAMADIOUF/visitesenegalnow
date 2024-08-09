// Select elements
const navToggle = document.getElementById('nav-toggle')
const navLinks = document.getElementById('nav-links')
const navLinkItems = document.querySelectorAll('.nav-link')

// Toggle navigation menu visibility
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-links')
})

// Close navigation menu when any nav link is clicked
navLinkItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show-links')
  })
})
console.log(hello);
