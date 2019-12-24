let a=Number(prompt('enter a',''));
let b=prompt('enter b','');
let c=prompt('enter c','');
let D = null;
if (a&& !isNaN(b) && !isNaN(c)){
    D = b*b-4*a*c;
}else{
    console.log('Invalid input data');
}
if (D<0){
    console.log('no solution')
}else if (D===0){
    console.log('x='+ -b/(2*a));
}else if(D>0){
    D=Math.sqrt(D);
    console.log('x1='+ (-b+D)/(2.0*a) +' and x2='+(-b+D)/(2.0*a));
}


