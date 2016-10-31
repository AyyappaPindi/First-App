//long running function

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    
    while(new Date() < ms){}
    console.log('Function Executed');
}

function clickHandler(){
    console.log('Clicked');
}

//listen for the click handler
document.addEventListener('click', clickHandler)

waitThreeSeconds();
console.log('Finished Execution');



//First Program
/*var a = 'Hello World !!!';

console.log(a);

function b() {
console.log('function b called!');
}

if (a === undefined) {
    console.log('variable a is not set');
}
else {
    console.log('variable a is set');
}

b();*/

//Second Program
/*

function a(){
    var myVar=1;
    console.log (myVar);
    b();
}

function b(){
    var myVar;
    console.log(myVar);
}

var myVar=2;
console.log (myVar);
a();
*/
