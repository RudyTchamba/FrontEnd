//DOM
const touches = [...document.querySelectorAll('.bouton')];
const listkeycode = touches.map(touche => touche.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    console.log(value, typeof value)
    calculer(value)
})
 
document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    console.log(value)
    calculer(value)
})

const calculer = (value) => {
    if(listkeycode.includes(value)){
        switch(value){
            case '8':
                screen.textContent = "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexkeyCode = listkeycode.indexOf(value);
                const key = touches[indexkeyCode];
                screen.textContent +=key.innerHTML;
        }
    }
}

window.addEventListener('error',(e) => {
    alert('Un ereur est survenue dans votre calcul : ' + e.message)
})
