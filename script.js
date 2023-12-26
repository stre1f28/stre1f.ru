function HideBarAndShowContent() {
    const articleElement = document.getElementById('content')
    const cursorElement = document.querySelector('.typed-cursor')
    const barElement = document.getElementById('bar')
    articleElement.style.width = '31ch';
    // Workaround, i need to fix this in future
    articleElement.style.margin = '0 0 0 1ch';
    cursorElement.style.display = 'inline';
    barElement.style.display = 'none';
}

setTimeout(HideBarAndShowContent, 1800);

// some code for typed.js library
let typed = new Typed('#typed', {
    typeSpeed: 65,
    cursorChar: '█',
    stringsElement: '#typed-strings'
});

