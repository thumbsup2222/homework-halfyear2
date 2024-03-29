setTimeout(() => {
    const screen = document.getElementById('loadingScreen');
    const main = document.getElementById('mainContent');

    screen.classList.replace('flex', 'hidden');
    main.classList.replace('hidden', 'block');
}, Math.round(Math.random() * 1800));

const init = document.getElementById('init');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
document.getElementById('signupBtn').addEventListener('click', () => {
    init.classList.replace('flex', 'hidden');
    signup.classList.replace('hidden', 'flex');
    document.getElementById('cancelBtn').addEventListener('click', () => {
        signup.classList.replace('flex', 'hidden');
        init.classList.replace('hidden', 'flex');
    })
});

document.getElementById('loginBtn').addEventListener('click', () => {
    init.classList.replace('flex', 'hidden');
    login.classList.replace('hidden', 'flex');
    document.getElementById('cancelBtnLogin').addEventListener('click', () => {
        login.classList.replace('flex', 'hidden');
        init.classList.replace('hidden', 'flex');
    })   
});