document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY;

        if (currentPosition < heroHeight) {
            headerGradient()
        } else {
            headerSolid()
        }
    })

    function headerGradient() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function headerSolid() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

    // Seção da trilogia, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            removeActiveButton();
            botao.target.classList.add('trilogy__tabs__button--is-active');
            hideAllTabs();
            tab.classList.add('trilogy__board--is-active');
        })
    }
})

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('trilogy__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('trilogy__board--is-active');
    }
}