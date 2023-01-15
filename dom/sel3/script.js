
(() => {
    const targets = document.querySelectorAll('.target');

    for (const target of targets) {
        target.innerHTML = 'owned';
    }
})();