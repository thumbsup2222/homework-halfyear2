let themeStatus = 0;
const cookieStatus = Cookies.get('theme');
const btn = document.getElementById('theme-switch');
const elements = {
    root: document.querySelectorAll('body.root-theme'),
    sect: document.querySelectorAll('*.sect-theme'),
    mobile: document.getElementById('mobileguy'),
    themeBtn: document.querySelectorAll('button#theme-switch > img'),
} 
const d = '-dark';
const path = './assets/img/theme/';

function toogleDark(elem, className){
    for(let i = 0; i < elem.length; i++){
        elem[i].classList.toggle(className+d);
    }
}
function attr(elem,name,value){
    elem.setAttribute(name, value);
}
function toogleDarkTheme(){
    themeStatus = 1;
    toogleDark(elements.root, 'root-theme');
    toogleDark(elements.sect, 'sect-theme');
    attr(elements.mobile, 'src', path+'mobile.svg');
    attr(elements.themeBtn[0], 'src', './assets/icons/theme/moon.svg');
    attr(elements.themeBtn[0], 'alt', 'Moon');
}
function toogleThemeByCookie(mode){
    if(mode == 1){
        toogleDarkTheme();
    }
    else{
        return;
    }
}
function checkCookie(){
    if (cookieStatus != undefined){
        console.log('Cookie found.');
        toogleThemeByCookie(cookieStatus);
        return;
    }
    if (cookieStatus == undefined){   
        console.warn('No cookies found. Creating new one.');
        Cookies.set('theme', '0', { expires: 300 });
    }
}
function changeCookieData(mode){
    if(mode == 0){
        Cookies.set('theme', 1, { expires: 300 });
        location.reload();
    }
    if(mode == 1){
        Cookies.set('theme', 0, { expires: 300 });
        location.reload();
    }
    if(mode == undefined){
        console.error('Cookie not found');
        toogleDarkTheme();
    }
}
btn.addEventListener('click', e => {
    if(themeStatus == 1){
        location.reload();
    }
    console.log(cookieStatus);
    changeCookieData(cookieStatus);
});

checkCookie();