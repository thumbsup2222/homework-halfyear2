const compoments = {
    section: document.getElementById('contact-section'),
    ['online-chat']: 
    `<h2>Online chat</h2>
    <p>
        The easiest and fastest way to contact us.
        Chat available in all days of week 
        from 8:00 to 22:00 at any region.
    </p>
    <h3>Direct chat</h3>
    <p>
        You can message us directly 
        by clicking <a href="#" class="underline">here</a>.
    </p>
    <h3>Social media chat</h3>
    <p>
       You can message us on social media.
       <ul>
           <li><a href="#" class="underline">Instagram</a></li>
           <li><a href="#" class="underline">Facebook</a></li>
       </ul>
    </p>
    <h3>Messager apps</h3>
    <p>
        You can message us on your favourite messager app.
    </p>
    <ul>
        <li><a href="#" class="underline">Whatsapp</a></li>
        <li><a href="#" class="underline">FB messenger</a></li>
        <li><a href="#" class="underline">Telegram</a></li>
    </ul>`,
    ['phone']: 
    `<h2>Phone call</h2>
    <p>
        You can also contact us by phone,
        but is not as fast as chat.
        Phone calls available in all days of week 
        from 9:00 to 21:00 at any region.
    </p>
    <h3>Phone numbers:</h3>
    <ul>
        <li>+375 29 123-45-67</li>
        <li>+375 44 123-45-67</li>
    </ul>`,
    ['mail']:
    `<h2>E-mail</h2>
    <p>
        E-mail is not as fast as chat and phone call.
        Available in all days of week,
        expect on Sunday from 12:00 to 20:00 at any region.
    </p>
    <h3>E-mail addresses:</h3>
    <ul>
        <li>info@daddyspizza.com</li>
        <li>contact@daddyspizza.com</li>
        <li>complain@daddyspizza.com</li>
    </ul>`,
    ['complain']: 
    `<h2>Complain</h2>
    <form id="complain-form">
        <p>If you are not satisfied with our service, you can send us a complaint.</p>
        <label for="idea">Your name:</label>
        <input type="text" name="name" id="name" required placeholder="Your name">
        <label for="email">Your email:</label>
        <input type="email" name="email" id="email" required placeholder="Your email">
        <label for="idea">Your complain:</label>
        <textarea name="idea" id="idea" required placeholder="Type here your complain" maxlength="650"></textarea>
        <span>Max lenght is 650 symbols</span>
        <input type="submit" value="Send" class="btn-primary">
    </form>`,
    ['idea']: 
    `<h2>Send your idea</h2>
    <form id="idea-form">
        <p>If you have suggestion or idea to improve our service, you can send it here.</p>
        <label for="idea">Your name:</label>
        <input type="text" name="name" id="name" required placeholder="Your name">
        <label for="email">Your email:</label>
        <input type="email" name="email" id="email" required placeholder="Your email">
        <label for="idea">Your idea:</label>
        <textarea name="idea" id="idea" required placeholder="Type here your idea" maxlength="650"></textarea>
        <span>Max lenght is 650 symbols</span>
        <input type="submit" value="Send" class="btn-primary">
    </form>`,
    ['complain-thanks']:
    `<h2>Thank you!</h2>
    <p>
        Thank you for your complaint. We will reply you as soon as possible. Your 
        feedback allows improve our service.
    </p>
    <a href="../index.html" class="underline text-xl text-orange-700">Back to home</a>`,
    ['idea-thanks']:
    `<h2>Thank you!</h2>
    <p>
        Thank you for your suggestion. We will reply you as soon as possible. Your
        feedback allows improve our service.
    </p>
    <a href="../index.html" class="underline text-xl text-orange-700">Back to home</a>`,
}
const btns = document.querySelectorAll('#contact-menu > li');
let form;
for (const btn of btns) {
    btn.addEventListener('click', () => {
        compoments.section.innerHTML = compoments[btn.id.replace('-btn', '')];
        form = document.querySelectorAll('form')
        form[0].addEventListener('submit', (e) => {
            e.preventDefault();
            compoments.section.innerHTML = compoments[btn.id.replace('-btn', '') + '-thanks'];
        })
    });
}
compoments.section.innerHTML = compoments['online-chat'];