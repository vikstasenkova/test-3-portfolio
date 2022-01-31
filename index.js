import i18Obj from './translate.js';

console.log("Score 75\nВёрстка соответствует макету. Ширина экрана 768px +48\nблок <header>секция hero\nсекция skills\nсекция portfolio\nсекция video\nсекция price\nсекция contacts\nблок footer\nНи на одном из азрешений до 320px включительно не появляется горизонтальная полоса прокрутки.\n Весь контент траницы при этом сохраняется: не обрезается и не удаляется +15\nнет полосы прокрутки при ширине траницы от 1440рх до 768рх +5\nнет полосы прокрутки при ширине страницы от 768рх до 480рх +5\nнет полосы прокрутки при ширине страницы от 480рх до 320рх +5\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22\nпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\nвысота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\nбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\n");

// import i18Obj from './translate.js';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if (hamburger){
    hamburger.addEventListener("click",function (e){
        document.body.classList.toggle("lock");
        hamburger.classList.toggle("open");
        nav.classList.toggle("open");
    })
}
if (nav){
    nav.addEventListener("click",function (e){
        document.body.classList.remove("lock");
        hamburger.classList.remove("open");
        nav.classList.remove("open");
    })
}
// --------------------------------------PORTFOLIO Change Photo--------------------------------------

const portfolioBtn = document.querySelectorAll('.btn');
const portfolioImages = document.querySelectorAll('.pph');

const portfolioBtns = document.querySelector('.portfolio-btns');

function changeImage(event) {
    if(event.target.classList.contains('btn')) {
        const seasons = event.target.dataset.season; 
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${seasons}/${index + 1}.jpg`);
         changeClassActive('.btn',event)
    }
}
portfolioBtns.addEventListener("click", changeImage);

function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach(item => {
      for(let i = 1; i <= 6; i++){
        const img = new Image();
        img.src = `./assets/img/${item}/${i}.jpg`
        console.log(img.src);
      }
     
    });
}
  preloadImages()


function changeClassActive(classAct,event) {
    let allClass = document.querySelectorAll(classAct);
    allClass.forEach((item) => item.classList.remove('active'));
    event.target.classList.add('active');
        
}

// --------------------------------------CHANGE language--------------------------------------
const langRu = document.querySelector(".ru");
const langEn = document.querySelector(".en");

function getTranslate (lang) {
    const datai18 = document.querySelectorAll('[data-i18]');
    datai18.forEach((item) =>{
        item.textContent = i18Obj[lang][item.dataset.i18]
    })
}

langRu.addEventListener('click', () => {
    getTranslate('.ru');
})
langEn.addEventListener('click', () => {
    getTranslate('.en');
})