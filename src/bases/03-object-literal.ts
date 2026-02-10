interface person {
    firstName:string;
    lastName:string;
    age:number

}

const ironman: person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 40
}


console.log(ironman);
const spiderman = structuredClone(ironman);
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
console.log(spiderman);
