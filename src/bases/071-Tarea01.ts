//const names = ['Goku', 'Vegeta'];


const useState = (value:string ) => {
    return [value, (param1:string) => {console.log(param1);}

    ] as const
}
;

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
setName('Walter');       // Imprime "Walter"



