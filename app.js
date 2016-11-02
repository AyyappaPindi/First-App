var arr = [
    1, 
    false, 
    {
        name: 'Tony',
        address: 'USA'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    }
];

console.log(arr);
arr[3](arr[2].name);

//by value (primitives)

console.log(this);

var a = 3;
var b;

b = a;
a = 2;
//alert (b);
//alert(a);

//by reference (all objects (including functions))

var c = { greeting: 'Hi' };
var d;

d = c;

c.greeting = 'Hello';

console.log(c.greeting);
console.log(d.greeting);

/*var employee = {
    firstname: 'Ayyappa',
    lastname: 'Pindi',
    address: {
        street: '4th cross, 4th main',
        area: 'Banashankari'
    }
};

console.log(employee);

function retrieve(data){
    console.log (data.firstname);
    console.log (data.lastname);
    console.log (data.address.area);
}

retrieve(employee);

retrieve({
    firstname: "Anitha",
    lastname: "Pindi",
    address: "asdasd"
});
*/