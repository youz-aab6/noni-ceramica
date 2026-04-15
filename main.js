const header = document.querySelector('.header');

let lastScroll = 0;
let passedThreshold = false;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (!passedThreshold) {
        if (currentScroll >= 400) {
            header.classList.add('hide');
            passedThreshold = true;
        }
        lastScroll = currentScroll;
        return;
    }

    if (currentScroll <= 0) {
        header.classList.remove('hide');
        lastScroll = 0;
        passedThreshold = false;
        return;
    }

    if (currentScroll < lastScroll) {
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }

    lastScroll = currentScroll;
});

const searchForm = document.querySelector('.header__search');
const searchInput = searchForm.querySelector('input');
const clearButton = searchForm.querySelector('.header__search-clear');

searchInput.addEventListener('input', () => {
    searchForm.classList.toggle('is-active', searchInput.value.trim() !== '');
});

clearButton.addEventListener('click', () => {
    searchInput.value = '';
    searchForm.classList.remove('is-active');
    searchInput.focus();
});




const menuButtons = document.querySelectorAll('.header__menu');
const menuHam = document.querySelector('.menu-ham');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        menuHam.classList.toggle('is-active');
        
        document.body.style.overflow = menuHam.classList.contains('is-active') ? 'hidden' : '';
    });
});











const box = document.querySelector('.shop-header');

setTimeout(function() {
    box.classList.add('show');
},1000);








const tabletSwiper = new Swiper(".tablet-swiper", {
    loop: true,
    slidesPerView: 2.4,
    spaceBetween: 20,
    navigation: {
        prevEl: ".tablet-swiper-prev",
        nextEl: ".tablet-swiper-next",
    },
});

const gallery = new Swiper(".gallery-list", {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    speed: 1500
});

const items = document.querySelectorAll('.item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
});

items.forEach((item, index) => {
    item.style.transitionDelay = `${index % 4 * 0.01}s`;
    observer.observe(item);
});




const subscribeForm = document.querySelector('#subscribe-form');
const emailInput = document.querySelector('#email-input');
const errorMsg = document.querySelector('.error-msg');

function showError() {
    errorMsg.classList.add('show');
    emailInput.classList.add('error');
}

function hideError() {
    errorMsg.classList.remove('show');
    emailInput.classList.remove('error');
}

// 입력 중 검사
emailInput.addEventListener('input', () => {
    if (!emailInput.value) {
        hideError();
        return;
    }

    if (!emailInput.checkValidity()) {
        showError();
    } else {
        hideError();
    }
});

// 제출 시 최종 검사
subscribeForm.addEventListener('submit', (e) => {
e.preventDefault();

if (!emailInput.value) {
    hideError();
    return;
}

if (!emailInput.checkValidity()) {
    showError();
    return;
}

hideError();

});





const cafecitoSection = document.querySelector('section.cafecito');
const cafecitoInner  = document.querySelector('.cafecito-inner');
const cafecitoBg     = document.querySelector('.cafecito-bg');

window.addEventListener('scroll', () => {
    const rect     = cafecitoSection.getBoundingClientRect();
    const sectionH = cafecitoSection.offsetHeight;
    const maxShift = window.innerHeight - sectionH;      // bg가 이동할 수 있는 최대 거리

    if (rect.bottom > 0 && rect.top < window.innerHeight) {
        // 섹션이 뷰포트를 통과하는 진행도 (0 → 1)
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + sectionH);
        cafecitoBg.style.transform = `translateY(${-(progress * maxShift * 0.6)}px)`;
    }
}, { passive: true });

const footerTargets = [
    document.querySelector('.footer-column.loja'),
    document.querySelector('.footer-column.noni'),
    document.querySelector('.footer-bottom .ring'),
    document.querySelector('.footer-bottom .end'),
];

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            footerTargets.forEach((el, i) => {
                setTimeout(() => el.classList.add('show'), i * 150);
            });
            footerObserver.disconnect();
        }
    });
}, { threshold: 0.1 });

footerObserver.observe(document.querySelector('.footer'));


document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (a && a.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });






