function greet(firstname,  lastname, language){

    language = language || 'en';
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('----------')
}

/*function greet(firstname,  lastname, language){
    
    console.log(arguments);
    console.log('----------')
}*/

greet('Ayyappa', 'Pindi', 'English');

//greet();

//greet('Hello');