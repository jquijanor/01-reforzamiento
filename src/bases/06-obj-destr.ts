const person = { name : 'Tony',
    age:45,
    key:'Ironnman'};


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string
};


const useContext = ({ key, name, age, rank }:Hero) =>
{
    return {
        keyName : key,
        user:{
            name:name,
            age:age,
            rank: rank
        }

    };
 
};

const { user:{rank}, keyName, user:{name}  } = useContext(person);
console.log(rank, keyName, name);


