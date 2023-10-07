const headerLinksSpan = document.querySelectorAll('.headerlinks-span-rotate');
const headerLinks = document.querySelectorAll('#header-links a');

const search = document.querySelector('#search-input');

const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const innerLinks = document.getElementById('nav-links-inner')

const aLinks = document.querySelectorAll('.a-link a');

// Rotate arrow span up and down
headerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.lastElementChild.classList.add('rotate')
    })
    link.addEventListener('mouseleave', () => {
        link.lastElementChild.classList.remove('rotate')
    })
})

// Hide and Show search input
searchInput = search.firstElementChild;
searchIcon = search.lastElementChild

searchIcon.addEventListener('click', function() {
    search.classList.toggle('bg');
    searchInput.classList.toggle('addOpacity');
});

// Scroll navbar 
let i = 0;

leftArrow.addEventListener('click', function() {
    console.log(i);
    if(i <= 600) {
        i += 300;
    }
    innerLinks.style.left = `${-i}px`;
    if(i > 600) {
        i = 600;
    }
    console.log(i);
})


rightArrow.addEventListener('click', function() {
    console.log(i);
    if (i < 10) {
        i = 10;
    }
    if(i >= 300 ) {
    i -= 300;
    innerLinks.style.left = `${-i}px`;
    } else {
    innerLinks.style.left = `10px`;
    }

    console.log(i);
})

// highlight links

aLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkLinks();
        link.classList.add('active');

    })
})

function checkLinks () {
    for(i = 0; i<aLinks.length; i++){
        if (aLinks[i].classList.contains('active')) {
            aLinks[i].classList.remove('active');
        } 
    }
}


