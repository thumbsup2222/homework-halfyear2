const popupBtn = document.getElementById('popup-open');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-popup');

popupBtn.addEventListener('click', e => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', e => {
    popup.style.display = 'none';
});

window.onbeforeunload = popup.style.display = 'none';
