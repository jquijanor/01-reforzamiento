import {heroes, type Heroe} from "../Data/Heroes.data"

const getHeroById = (id:number):Heroe|undefined => {
    const hero = heroes.find((hero) => {
            return hero.id === id;
        })
        // if (!hero){
        //     throw new Error(`No existe un heroe con el id ${id}`);
        // }
        return hero;
    };

    console.log(getHeroById(5));

