// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("active");
}

function toggleMobileDropdown() {
  const dropdown = document.getElementById("mobileDropdown");
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

function toggleDropdown() {
  const dropdown = document.getElementById("resourcesDropdown");
  dropdown.classList.toggle("active");
}

// Close dropdown if clicked outside
document.addEventListener("click", function (e) {
  const dropdown = document.getElementById("resourcesDropdown");
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

document
  .querySelectorAll("#resourcesDropdown .dropdown-content a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("resourcesDropdown").classList.remove("active");
    });
  });
function openCV() {
  window.open("ResumeNew.pdf", "_blank"); // open in new tab
}
function opennewLetterPDF() {
  window.open("Newsletter-DGME.pdf", "_blank");
}
function openannualreportPDF() {
  window.open("annualReport-2016-17.pdf", "_blank");
}
function openDSpace() {
  window.open(
    "http://repository.pastic.gov.pk/jspui/handle/123456789/5908",
    "_blank"
  );
}
function openPDF(link) {
  window.open(link, "_blank"); // Opens in new tab
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    const target = document.getElementById(targetId);

    const headerOffset = 80; // agar sticky header hai
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
