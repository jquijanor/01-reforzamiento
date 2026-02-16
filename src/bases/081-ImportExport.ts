import {heroes, type Heroe, Owner} from "../Data/Heroes.data"


const ListaHeroes:Heroe[] = [];


export const getHeroByOwner = (owner:Owner) => {
    let ListaHeroes = heroes.filter (Heroe => Heroe.owner === owner);
    return ListaHeroes;
    };




