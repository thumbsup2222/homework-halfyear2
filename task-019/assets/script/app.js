const elem = {
    'promodo-exit-button': document.getElementById('promocode-exit-button'),
    'promocode-notify': document.getElementById('promocode-notify'),
    listen: (target, trigger = 'click', action) => {
        target.addEventListener(trigger, action)
    }
}

elem.listen(elem['promodo-exit-button'], 'click', () => {
    elem['promocode-notify'].style.display = 'none';
})