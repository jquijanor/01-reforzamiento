const API_KEY = 'd2fqK1eHNtazh2nzPLYIn6AP6jZPJ7W4';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
myRequest.then( (Response) => {
    console.log(Response);
    Response.json( ).then ((data) => { console.log(data);});
}).catch ( err => {console.error(err);})