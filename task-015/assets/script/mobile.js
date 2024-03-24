const menu = document.querySelectorAll('nav > menu');
const btn = document.getElementById('mobile-menu-btn');
let menuState = 0;

btn.addEventListener('click', () => {
    for(const elem of menu){
        if(menuState === 0){
            console.log('Show menu', elem)
            elem.style.display = 'block';
            menuState = 1;
        } else{
            console.log('Hide menu', elem);
            elem.style.display = 'none';
            menuState = 0;
        }
    }
});
