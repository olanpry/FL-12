let pro = confirm('Do you want to play a game?');
let randomAmplitude0 = 8,
    randomAmplitude = randomAmplitude0;
let MaxSum0 = 100,
    MaxSum = MaxSum0;
let prize = 0;
if (!pro) {
    alert('You did not become a billionaire, but can.');
}
while (pro) {
    let num = Math.round(randomAmplitude * Math.random());
    let x;
    let win=false;
    let newgame=false;
    let i = 0,
        imax=3,
        m=4,
        k=2;
    let cancelgame=false;
    let answ = 'Your prise is ';
    while(i<imax && win===false) {
        let AttemptPrize = MaxSum*Math.pow(k,imax-1-i)/m;
        let j=imax-i;
        x = prompt(
            'Choose a roulette pocket number from 0 to '+randomAmplitude+
            '\r Attempts left: '+j+'; \r Total prize: '+ MaxSum+'$;\r ' +
            'possible prize on current attempt:'+AttemptPrize+'$', '');
        if (+x === num) {
            prize = prize + AttemptPrize;
            pro=confirm('Congratulation, you won! '+ answ + prize+'$. Do you want to continue?');
            win = true;
            if (!pro){ //не продовжувати
                alert('Thank you for your participation. \r' +answ + prize+'$');
                newgame=confirm('Do you want to play again?');//грати заново
                cancelgame=!newgame;
            }
        } else if (x!==null){
            i++;
          }else if (x===null){ //скасовано введення числа
            pro=false;
            newgame=false;
            i=imax;
            cancelgame=true;
        }
    }
    if (!win && !cancelgame){
        alert('Thank you for your participation. \r'+ answ + prize+'$');
        newgame=confirm('Would you like to play again?');
    }else if (!newgame && !cancelgame){
        randomAmplitude=randomAmplitude+m;
        MaxSum = MaxSum*k;
    }
    if (newgame && !cancelgame){
        pro=true;
        prize=0;
        randomAmplitude=randomAmplitude0;
        MaxSum = MaxSum0;
    }

}
