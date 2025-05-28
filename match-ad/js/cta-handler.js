const ctaButton = document.getElementById("ctaButton");

ctaButton.addEventListener("click", () => {
  window.open("https://example.com ", "_blank");
  popup.classList.add('hidden');
});