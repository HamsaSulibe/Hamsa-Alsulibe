document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu ul li a");

    function setActiveLink() {
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener('scroll', setActiveLink);
    navLinks.forEach(link => link.addEventListener('click', function () {
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        link.classList.add('active');
    }));
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    function adjustMenuOnResize() {
        if (window.innerWidth <= 468) {
            menuIcon.addEventListener('click', toggleMenuVisibility);
            menu.addEventListener('click', closeMenuOnLinkClick);
        } else {
            menu.style.transform = 'translateX(0)';
            menuIcon.removeEventListener('click', toggleMenuVisibility);
            menu.removeEventListener('click', closeMenuOnLinkClick);
        }
    }

    function toggleMenuVisibility() {
        if (menu.style.transform === 'translateX(-100%)') {
            menu.style.transform = 'translateX(0)';
        } else {
            menu.style.transform = 'translateX(-100%)';
        }
    }

    function closeMenuOnLinkClick(e) {
        if (e.target.tagName === 'A') {
            menu.style.transform = 'translateX(-100%)';
        }
    }

    adjustMenuOnResize();
    window.addEventListener('resize', adjustMenuOnResize);
});
