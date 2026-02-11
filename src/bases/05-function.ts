function greet( name:string):string { 
    return `Hola ${name}`
};

const message = greet('Goku');

console.log(message);

const greek2 = (name:string):string => {
     return `Hola ${name}`
};

const message2 = greek2('Chapulin');
console.log(message2);
