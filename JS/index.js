document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
const menuButton = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
const toggleBtn = document.querySelector(".toggleBtn");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     console.log('The menu icon was clicked')
// });
toggleBtn.addEventListener("click", (e) => {
    navbar.classList.toggle("shownavbar");
    // console.log(navbar.classList);
    const screenwidth = window.innerWidth;
    if (navbar.classList.contains("shownavbar") && screenwidth <= 900) {
      // e.target.classList.remove("fa-bars");
      // e.target.classList.add("fa-times");
    }
  });
  body.addEventListener("click", (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenwidth = window.innerWidth;
    const clickElement = e.target.classList[1];
    // console.log(clickY);
    if (
      screenwidth <= 900 &&
      clickX > 300 &&
      clickY >= 80 &&
      clickElement !== "toggleBtn"
    ) {
      navbar.classList.remove("shownavbar");
    }
  });
// let navbar = document.querySelector ('.navbar');

// document.querySelector('#menu-icon').onclick = () =>{
//         navbar.classList.toggle('active');
// } 


/* function redirectToThankYou() {
    // After the form is submitted, redirect the user
    window.location.href = "thankyou.html" // Change to your thank you page
}
 */

const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear;
})

function myFunction() {
  alert("Click here to be redirected to message Asol Digital Directly");
  }