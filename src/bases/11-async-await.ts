import type {GiphyRandonResponse} from '../Data/giphy.response';
const API_KEY = 'd2fqK1eHNtazh2nzPLYIn6AP6jZPJ7W4';

const createImageInsideDOM = (url:string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

const  getRamdomGifUrl = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const  {data} :GiphyRandonResponse = await response.json();
    const imageUrl = data.images.original.url;
    return imageUrl;
}

getRamdomGifUrl().then((url) => createImageInsideDOM(url));
//getRamdomGifUrl().then( createImageInsideDOM );
