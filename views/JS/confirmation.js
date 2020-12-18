// Affichage du prénom et email du client, ainsi que l'identifiant de la commande
const contact = JSON.parse(localStorage.getItem('contact'));
const orderId = JSON.parse(localStorage.getItem('orderId'));

document.getElementById('helloName').innerHTML = "Bonjour " + contact.firstName + ",";
document.querySelector('.emailSent').innerHTML = contact.email;
document.querySelector('.idCommand').innerHTML = "Votre commande n° " + orderId;
document.querySelector('.idCommandTwice').innerHTML = orderId;

// récapitulatif des articles
const product = JSON.parse(localStorage.getItem('myCart'));
const sectionCard = document.querySelector('.sectionCard');

for(let data of product){
    let card = document.createElement('div')
    let divRow = document.createElement('div');
    let divImg = document.createElement('div');
    let divColumnTitle = document.createElement('div');
    let divCardBody = document.createElement('div');

    let img = document.createElement('img');
    let title = document.createElement('h5');
    let price = document.createElement('h6');
    let space = document.createElement('hr');

    card.classList.add('card');
    card.setAttribute('id','cardProduct');
    divRow.classList.add('row','cardSummary');
    divImg.classList.add('col-4');
    img.classList.add('card-img');
    divColumnTitle.classList.add('col-8');
    title.classList.add('card-title');
    divCardBody.classList.add('card-body');

    sectionCard.appendChild(card);
    card.appendChild(divRow);
    divRow.appendChild(space);
    divRow.appendChild(divImg);
    divImg.appendChild(img);
    divRow.appendChild(divColumnTitle);
    divColumnTitle.appendChild(divCardBody);
    divCardBody.appendChild(title);
    divCardBody.appendChild(price);

    img.src = data.imageUrl;
    title.innerHTML = data.name;
    price.innerHTML = data.price/100 + ",00€";
};

// Affichage du total de la commande
const sum = JSON.parse(localStorage.getItem('sum'));
let totalSum = document.querySelector('.totalSum');
totalSum.innerHTML = sum + ",00€";

