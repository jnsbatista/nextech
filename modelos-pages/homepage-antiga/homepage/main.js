//header nav toggle
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}


//header nav
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}


// scroll
const header = document.querySelector('#header')
const navHeader = header.offsetHeight

function changeHeaderWhenScroll() {
    if (this.window.scrollY >= navHeader) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}


// carrousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }

});

// Scroll Reveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
 #home, #about, #services, #testimonials,
     #contact, footer
`,
    { interval: 100 })



// botão voltar ao topo FUNCTION && menu ativo conforme seção
const backToTopButton = document.querySelector('.back-to-top')
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkPointStart = checkpoint >= sectionTop
        const checkPointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkPointStart && checkPointEnd) {
            let findSectionId = document.querySelector('nav ul li a[href*=' + sectionId + ']')
            findSectionId.classList.add('active')

            if (findSectionId.getAttribute('href') == '#home') {
                backToTopButton.classList.remove('show')
            } else {
                backToTopButton.classList.add('show')
            }

        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
}

window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    activateMenuAtCurrentSection()
})
