document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    var modeIcon = document.getElementById('modeIcon');
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.textContent = '🌜';
    } else {
        modeIcon.textContent = '🌞';
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.7)';
    } else {
        navbar.style.backgroundColor = '#333';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.5)';
    }
});

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', function() {
    var current = '';
    sections.forEach(section => {
        var sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
