//Gombok kiválasztása
const prewBtn =  document.querySelector('button.btn:nth-child(1)');
const numBtn =  document.querySelector('button.btn:nth-child(2)');
const nextBtn =  document.querySelector('button.btn:nth-child(3)');

let Counter = 0;

numBtn.innerHTML = Counter;

prewBtn.classList.add("btn-info");

//Több elem lekérése egyszerre

const Buttons = document.querySelectorAll('.btn-group button.btn');

['btn-info','btn-primary','btn-info'].forEach((className , index)=>{
    Buttons[index].classList.add(className);
});

//Eseménykezelők bellítása a gombokra
prewBtn.addEventListener('click',(e)=>{
    console.log(e);

    if(Counter < 2)
        return;

    Counter -= 1;
    Buttons[1].innerHTML = Counter;
});

nextBtn.addEventListener('click',(e)=>{
    Counter += 1;
    Buttons[1].innerHTML = Counter;
});
