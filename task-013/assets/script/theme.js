// Critical variables
const btn = document.getElementById('darkmode'); // Dark mode switch button
const path = './assets/img/dark/'; // Icons for dark mode
const theme = document.querySelectorAll('[theme="0"]'); // Grabs all elements with 'theme' attribute
let themeMode = 0; // 0 is white and 1 is dark mode

// Element grabber
function grabID(value){ return document.getElementById(value); }

// Getting elements
const aside = {
    brandlogo: grabID('brandlogo'),
    mobileguy: grabID('mobileguy'),
}
const main = {
    moon_icon: grabID('thememode_icon'),
    sun_icon: document.createElement('i'),
}

// Color values
const bg_color = '#021426';

// Theme switching function
function darkMode(){
    // Aside
    attr(aside.brandlogo, 'src', path+'brand.svg');
    attr(aside.mobileguy, 'src', path+'mobile.svg');
    // Main
    btn.removeChild(main.moon_icon);
    btn.appendChild(main.sun_icon);
    main.sun_icon.classList.add('fa-solid');
    main.sun_icon.classList.add('fa-sun');
}

// Change attributes (needed for images)
function attr(elem, name, value){
    elem.setAttribute(name, value);
}

// Switch theme
btn.addEventListener('click', e => {
    if(themeMode == 0){
        themeMode = 1;
        // Any element has 'theme; attr with 0 will be set 1
        for (var i=0; i < theme.length; i++) {
            theme[i].setAttribute("theme", "1");
        }
        // Now everything is dark mode
        darkMode();
    }
    // Reload will reset to white theme and 'theme' variable and HTML attr is set to 0 again
    else if(themeMode == 1){
        location.reload();
    }
    // Very rarely occur
    else{
        console.error('An error occured when switching theme.');
    }
});
