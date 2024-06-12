{
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const string = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()';
const elements = document.getElementsByClassName('random-text');
for (let i = 0; i < elements.length; i++) {
    const elem = elements[i];
    const original = elem.textContent;
    elem.addEventListener('mouseover', async function(){
        for (let i = 0; i < 20; i++) {
            let newText = '';
            for (let j = 0; j < original.length; j++) {
                newText += string[Math.floor(Math.random() * string.length)];
            }
            elem.textContent = newText;
            await delay(25);
        }
        elem.textContent = original;
    })
}
}