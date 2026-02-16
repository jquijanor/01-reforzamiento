const myPromise = new Promise <number>((resolve, reject) => {

    setTimeout(() => {
    resolve(100)
    reject('Mi Amigo se perdio');

    }, 4000);
}

)

myPromise.then((myMoneyIsBack) => { console.log(`Dinero devuelto ${myMoneyIsBack}`)
}).catch((reason) => {console.warn(reason);});
