var app = {

    eventHandling: function () {

        var search = document.querySelector('.header-search>input');

        var boxSearch = document.querySelector('.search-box');

        var overlaySearch = document.querySelector('.search-overlay');

        var borDerSearch = document.querySelector('.header-search input');




        search.addEventListener('click', function () {
            boxSearch.style.display = 'block';
            overlaySearch.style.visibility = 'unset';
            overlaySearch.style.opacity = '1';
            borDerSearch.style = 'border-bottom-left-radius: 0px;';
        })

        overlaySearch.addEventListener('click', function () {
            boxSearch.style.display = 'none';
            overlaySearch.style.visibility = 'hidden';
            overlaySearch.style.opacity = '0';
            borDerSearch.style = 'border-bottom-left-radius: 4px;';
        })

        var inputMobile = document.querySelector('.input__search--mobile>input');

        var InputItem = document.querySelector('.input__search--mobile')

        var headerInputMobile = document.querySelector('.header__search--mobile');

        var overlaySearchMobile = document.querySelector('.search-mobile-overlay');

        var headerMobileTop = document.querySelector('.header__mobile--top')

        var boxMenuabs = document.querySelector('.box-search-mobile')

        inputMobile.addEventListener('click', function () {
            headerInputMobile.style.transform = 'translateY(-100%)';
            overlaySearchMobile.style.display = 'block';
            InputItem.style.backgroundColor = 'var(--red-color)';
            headerMobileTop.style.backgroundColor = 'unset';
            boxMenuabs.style.display = 'block';
        })

        overlaySearchMobile.addEventListener('click', function () {
            headerInputMobile.style.transform = 'translateY(0)';
            overlaySearchMobile.style.display = 'none';
            InputItem.style.backgroundColor = 'unset';
            headerMobileTop.style.backgroundColor = 'var(--red-color)';
            boxMenuabs.style.display = 'none';
        })

    },

    mobileMenu: function () {

        var boxMenu = document.querySelector('.mobile-menu');

        var openMenu = document.querySelector('.header__mobile--icon');

        var overlayMobile = document.querySelector('.mobile-overlay');

        var closeMenu = document.querySelector('.close')

        openMenu.addEventListener('click', function () {
            boxMenu.style.transform = 'translateX(0)';
            overlayMobile.style.display = 'block';
        });

        closeMenu.addEventListener('click', function () {
            boxMenu.style.transform = 'translateX(-100%)';
            overlayMobile.style.display = 'none';
        });

        overlayMobile.addEventListener('click', function () {
            boxMenu.style.transform = 'translateX(-100%)';
            overlayMobile.style.display = 'none';
        })

        // menu mobile con

        var iconDown = document.querySelectorAll('.icon-down')[0];

        var showMenuDown = document.querySelector('.mobile-fpt1');

        iconDown.onclick = function () {
            showMenuDown.classList.toggle('flex');
            this.classList.toggle('deg');
            document.querySelectorAll('.mobile__menu--list>li>a')[0].classList.toggle('FW')
        }

        var showMenuDown2 = document.querySelector('.mobile-fpt2')

        var iconDown2 = document.querySelectorAll('.icon-down')[1];

        iconDown2.onclick = function () {
            showMenuDown2.classList.toggle('flex')
            this.classList.toggle('deg');
            document.querySelectorAll('.mobile__menu--list>li>a')[1].classList.toggle('FW')
        }

        var showMenuDown3 = document.querySelector('.mobile-fpt3')

        var iconDown3 = document.querySelectorAll('.icon-down')[2];

        iconDown3.onclick = function () {
            showMenuDown3.classList.toggle('flex')
            this.classList.toggle('deg');
            document.querySelectorAll('.mobile__menu--list>li>a')[2].classList.toggle('FW')
        }


        var showMenuDown4 = document.querySelector('.mobile-fpt4')

        var iconDown4 = document.querySelectorAll('.icon-down')[3];

        iconDown4.onclick = function () {
            showMenuDown4.classList.toggle('flex')
            this.classList.toggle('deg');
            document.querySelectorAll('.mobile__menu--list>li>a')[3].classList.toggle('FW')
        }

        var showMenuDown5 = document.querySelector('.mobile-fpt5')

        var iconDown5 = document.querySelectorAll('.icon-down')[4];

        iconDown5.onclick = function () {
            showMenuDown5.classList.toggle('flex')
            this.classList.toggle('deg');
            document.querySelectorAll('.mobile__menu--list>li>a')[4].classList.toggle('FW')
        }

        var showMenuDown6 = document.querySelector('.mobile-fpt6')

        var iconDown6 = document.querySelectorAll('.icon-down')[5];

        iconDown6.onclick = function () {
            showMenuDown6.classList.toggle('flex')
            this.classList.toggle('deg');
            document.querySelectorAll('.mobile__menu--list>li>a')[5].classList.toggle('FW')
        }
    },




    start: function () {
        this.eventHandling();
        this.mobileMenu();
    }
}

app.start();

// Slider

var sizeSlider = document.querySelectorAll('.slider-container')[0].clientWidth;

var transferSlider = document.querySelector('.slider-quantily');

var FullImg = document.querySelectorAll('.slider-quantily img');

var maxImg = sizeSlider * FullImg.length;

maxImg -= sizeSlider;

var transfer = 0;

function nextSlider() {
    if (transfer < maxImg) {

        transfer += sizeSlider;
    } else {
        transfer = 0;
    }

    transferSlider.style.marginLeft = '-' + transfer + 'px';
}

function prevSlider() {
    if (transfer == 0) {
        transfer = maxImg;
    } else {

        transfer -= sizeSlider;
    }

    transferSlider.style.marginLeft = '-' + transfer + 'px';
}


setInterval(function () {
    nextSlider();
}, 7000)


// Hot-product

var iconNext = document.querySelector('.next-product-hot');

var iconPrev = document.querySelector('.prev-product-hot');

var hotProductSize = document.querySelector('.product-hot-app').clientWidth;

var hotProductApp = document.querySelector('.product-app-quantily');

var fullClick = 5;

var maxClick = hotProductSize * fullClick;

maxClick -= hotProductSize;

var hotIndex = 0;

function nextProductHot() {
    if (hotIndex < maxClick) {
        hotIndex += hotProductSize;
    } else {
        hotIndex = 0;
    }

    hotProductApp.style.transform = 'translateX(' + '-' + hotIndex + 'px';

    if (hotIndex >= maxClick) {
        iconNext.style.display = 'none';
    }
    if (hotIndex <= maxClick) {

        iconPrev.style.display = 'block';
    }
}

function prevProductHot() {
    if (hotIndex == 0) {
        hotIndex = maxClick;
    } else {
        hotIndex -= hotProductSize;
    }
    hotProductApp.style.transform = 'translateX(' + '-' + hotIndex + 'px';
    iconNext.style.display = 'block';

    if (hotIndex == 0) {

        iconPrev.style.display = 'none';
    }
}

