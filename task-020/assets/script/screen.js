{
    const img = new Image();
    const hero = document.querySelectorAll('body > header')[0];
    img.src = './assets/img/salad.jpg';
    hero.style.height = `${img.height / 2}px`;
}
{
    const newsletterSubmit = document.querySelectorAll('.newsletter > form > input[type="submit"]')[0];
    const input = document.querySelectorAll('.newsletter > form > input[type="email"]')[0];
    newsletterSubmit.addEventListener('click', () => {
        if (input.value === ''){
            return;
        } else {
            window.alert('Thank you for subscribing! We won\'t spam you! 😉');
        }
    })
}