const body = document.querySelector('body');
const buttons = document.querySelectorAll('button')
buttons.forEach(newone => {
    newone.addEventListener('click', () => {
        const text = newone.innerHTML;
        console.log(text)
        switch (text) {
            case 'a':
                var audio = new Audio('/sounds/tom-3.mp3');
                audio.play();
                break;
            case 'w':
                var audio = new Audio('/sounds/snare.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('/sounds/tom-1.mp3');
                audio.play();
                break;
            case 'sp':
                var audio = new Audio('/sounds/crash.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('/sounds/tom-2.mp3');
                audio.play();
                break;
            case 'k':
                var audio = new Audio('/sounds/kick-bass.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('/sounds/tom-4.mp3');
                audio.play();
                break;
        }
    })
})
document.addEventListener('keypress', (events) => {
    switch (events.key) {
        case 'a':
            var audio = new Audio('/sounds/tom-3.mp3');
            audio.play();
            break;
        case 'w':
            var audio = new Audio('/sounds/snare.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('/sounds/tom-1.mp3');
            audio.play();
            break;
        case ' ':
            var audio = new Audio('/sounds/crash.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('/sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('/sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('/sounds/tom-4.mp3');
            audio.play();
            break;
    }
})