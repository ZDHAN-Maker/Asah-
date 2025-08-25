document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header h1");
  header.addEventListener("click", () => {
    alert("Selamat datang di Website Desa Sukamaju!");
  });

  const dropdownBtn = document.querySelector(".dropdown > a");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownBtn) {
    dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownContent.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (
        !dropdownBtn.contains(e.target) &&
        !dropdownContent.contains(e.target)
      ) {
        dropdownContent.classList.remove("show");
      }
    });
  }
});
