const tblMenu = document.querySelector("nav span.humberger");
const menu = document.querySelector("nav ul");
tblMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
});
const pilihan = document.querySelectorAll("nav ul li");
pilihan.forEach(function (e){
    e.addEventListener("click", function () {
        menu.classList.toggle("active");
    })
})
