const url = 'http://localhost:3000/api/cameras';

const product = document.querySelector('#nameOfArticle');
const typeLense = document.querySelector('#typeOfLenses');
const img = document.querySelector('img');
const priceOfArticle = document.querySelector('#unitPrice');

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // faire une fonction addevent.listener en fonction de l'article(s) choisi(s)
        for(let cameras of data){
            console.log(cameras);
            product.innerHTML = `${cameras.name}`;
            priceOfArticle.innerHTML = `€ ${cameras.price/100},00`;
            img.src = cameras.imageUrl;
        }
    })
    // .catch(error => console.log('ERROR'))
