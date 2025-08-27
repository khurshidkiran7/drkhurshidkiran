function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openCV() {
  window.open("pdfs/Resume.pdf", "_blank"); // open in new tab
}
function opennewLetterPDF() {
  window.open("pdfs/Newsletter-DGME.pdf", "_blank");
}
function openannualreportPDF() {
  window.open("pdfs/AnnualReport-DGME-2016-17.pdf", "_blank");
}
function openDSpace() {
  window.open(
    "http://repository.pastic.gov.pk/jspui/handle/123456789/5910",
    "_blank"
  );
}
