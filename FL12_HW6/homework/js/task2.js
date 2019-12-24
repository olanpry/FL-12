let a=prompt('enter a');
let b=prompt('enter b');
let c=prompt('enter c');
let D=[a,b,c];
let k=0;
for (let i=0;i<3;i++){
   if (D[i]===undefined || D[i]===''){
       k=1;
   }
}
if (k===1){
    alert('input values should be ONLY numbers ');
}else if (a*b*c===0){
    alert('A triangle must have 3 sides with a positive definite length')
}else if (a>=b+c || c>=a+b || b>=a+c) {
alert('Triangle doesn’t exist');
}else if (a===b && b===c){
    alert('Equilateral triangle')
}else if (a+-b || b+-c || c+-a){
    alert('Isosceles triangle')
}else {
    alert('Scalene triangle');
}
