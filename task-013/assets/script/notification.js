const open_btn = document.getElementById('notification-open');
const close_btn = document.getElementById('notification-close');
const popup = document.getElementsByTagName('notification-popup');

open_btn.addEventListener('click', e => {
    for (var i=0; i < popup.length; i++) {
        popup[i].style.visibility = 'visible';
    }
});

close_btn.addEventListener('click', e => {
    for (var i=0; i < popup.length; i++) {
        popup[i].style.visibility = 'hidden';
    }
});