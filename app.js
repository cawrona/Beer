const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

let menu = document.getElementById("nav-icon4");
let menuList = document.getElementById("menu");

// let download = document.getElementsByClassName('svgdownload');
// let downloadbox = document.getElementsByClassName('download');



// console.log(downloadbox)

// download.forEach((svg) => {
  
// })

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuList.classList.toggle('open');
  document.body.classList.toggle('open');
  // if(menuList.classList.contains('open')) {
  //   menuList.style.opacity = 1;
  // }
  // else menuList.style.opacity = 0;
})

let navlinks = document.querySelectorAll('li');


navlinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    console.log('yay');
    document.body.classList.toggle('open');
    menu.classList.toggle('open');
    menuList.classList.toggle('open');
  })
});
// navlink.addEventListener('click', () => {
//   menu.classList.toggle('open');
//   menuList.classList.toggle('open');
// })

