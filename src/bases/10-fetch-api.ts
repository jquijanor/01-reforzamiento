import type {GiphyRandonResponse} from '../Data/giphy.response';
const API_KEY = 'd2fqK1eHNtazh2nzPLYIn6AP6jZPJ7W4';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
// myRequest.then( (Response) => {
//     console.log(Response);
//     Response.json( ).then ((data) => { console.log(data);});
// }).catch ( err => {console.error(err);})
myRequest.then( (Response) => Response.json()).then(({data}:GiphyRandonResponse) => {
    const imageUrl = data.images.original.url;
    // const imageUrl = data.data.images.original.url;    
    console.log(imageUrl);
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.append(imgElement);


}).catch(( err) => { console.error(err)});
