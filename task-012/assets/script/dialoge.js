const popup = document.getElementById('cookie_popup');
const popup_btn = document.getElementById('cookie_popup_btn');
const popup_btn_skip = document.getElementById('cookie_popup_btn_skip');

popup_btn.addEventListener('click', e => {
    popup.style.display = 'none';
})

popup_btn_skip.addEventListener('click', e => {
    popup.style.display = 'none';
})