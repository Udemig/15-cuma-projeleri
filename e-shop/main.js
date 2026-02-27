// Html'deki elemanlara eriş
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");
const closeBtn = document.querySelector("#close-btn");
const header = document.querySelector("header");

// ! menuBtn elemanına tıklanıldığında nav ve header elemanına eriş
menuBtn.addEventListener("click", () => {
  // header'a nav-active class'ı ekle
  header.classList.add("nav-active");

  //   nav elemanına active class'ı ekle
  nav.classList.add("active");

  //   menuBtn'i gizle
  menuBtn.style.display = "none";

  // closeBtn'i aktif et
  closeBtn.style.display = "block";
});

// ! closeBtn elemanına tıklanınca header ve nav elemanına eklenen class'ları kaldır

closeBtn.addEventListener("click", () => {
  // header'a nav-active class'ı kaldır
  header.classList.remove("nav-active");

  //   nav elemanına active class'ı kaldır
  nav.classList.remove("active");

  //   menuBtn'i aktif et
  menuBtn.style.display = "block";

  // closeBtn'i gizle
  closeBtn.style.display = "none";
});
