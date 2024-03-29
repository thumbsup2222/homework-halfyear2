const page = {
    load() { 
        const screen = document.getElementById('loadingScreen');
        const main = document.getElementById('mainContent');
        const time = Math.round(Math.random() * 1800);
        setTimeout(() => {
            screen.classList.replace('flex', 'hidden');
            main.classList.replace('hidden', 'flex');
        }, time);
        this.present();
    },
    buttons: document.querySelectorAll('button.sectionButton'),
    level: 0,
    present() {
        console.log(this.level);
        for(const button of page.buttons){
            button.addEventListener('click', () => {
                this.changeSection(this.level);
            })
        }
    },
    changeSection(level) {
        const sections = document.querySelectorAll('section.introSection');
        sections[level].classList.replace('flex', 'hidden');
        this.level++;
        if(level == this.buttons.length - 1){
            location.href = './home/login.html';
            return;
        }
        sections[this.level].classList.replace('hidden', 'flex');
    }
}

page.load();