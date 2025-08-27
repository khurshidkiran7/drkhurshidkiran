function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openCV() {
  window.open("Resume.pdf", "_blank"); // open in new tab
}
function opennewLetterPDF() {
  window.open("Newsletter-DGME.pdf", "_blank");
}
function openannualreportPDF() {
  window.open("annualReport-2016-17.pdf", "_blank");
}
function openDSpace() {
  window.open(
    "http://repository.pastic.gov.pk/jspui/handle/123456789/5910",
    "_blank"
  );
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
