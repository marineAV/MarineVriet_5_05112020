let panier = JSON.parse(localStorage.getItem('myCart'));
console.log(panier);

//  Fonction de suppression de l'article*************************************************
function deleteArticle(i){ 
    panier.splice(i, 1) // supprime 1 article du panier au clic sur le bouton correspondant
    localStorage.clear() // puis supprime tout dans le localStorage
    localStorage.setItem('myCart', JSON.stringify(panier)) // puis renvoi tout ce qui reste dans le panier, dans le storage
    window.location.reload()
}

// Création des cartes produits et affichage de chaque produit enregistré depuis le localStorage**********************

const cartProduct = document.querySelector('#cardCart');

if(panier == null){ // Si localStorage vide alors "Votre panier est vide"
    let emptyCart = document.createElement('div');
        emptyCart.classList.add('row','empty');
        cartProduct.appendChild(emptyCart);
        emptyCart.innerHTML = "Votre panier est vide !"
        console.log("Votre panier est vide!")
}else{

    for(let data of panier) {
        let card = document.createElement('div');
        card.classList.add('row','eachArticle');
        cartProduct.appendChild(card);

        let divImg = document.createElement('div');
        let divName = document.createElement('div');
        let divLenses = document.createElement('div');
        let divQuantity = document.createElement('div');
        let divPrice = document.createElement('div');
        let divButton = document.createElement('div');

        divImg.classList.add('col','spaceResponsive');
        divName.classList.add('col','spaceResponsive');
        divLenses.classList.add('col','spaceResponsive');
        divQuantity.classList.add('col','spaceResponsive');
        divPrice.classList.add('col','spaceResponsive');
        divButton.classList.add('col','spaceResponsive');

        card.appendChild(divImg);
        card.appendChild(divName);
        card.appendChild(divLenses);
        card.appendChild(divQuantity);
        card.appendChild(divPrice);
        card.appendChild(divButton);

        let titleImg = document.createElement('img');
        let titleName = document.createElement('h6');
        let titleLenses = document.createElement('h6');
        let titleQuantity = document.createElement('h6');
        let titlePrice = document.createElement('h6');
        let titleButton = document.createElement('button');

        divImg.appendChild(titleImg);
        divName.appendChild(titleName);
        divLenses.appendChild(titleLenses);
        divQuantity.appendChild(titleQuantity);
        divPrice.appendChild(titlePrice);
        divButton.appendChild(titleButton);

        titleButton.classList.add('btn','btn-dark');
        titleButton.setAttribute('id', 'removeButton')
        titleImg.classList.add('img-fluid','rounded','mb-3','mb-md-0');
        titleQuantity.classList.add('quantityCart')

        titleImg.src = data.imageUrl;
        titleName.innerHTML = `${data.name}`;
        titleLenses.innerHTML = `${data.lenses}`;
        titlePrice.innerHTML = `${data.price/100},00 €`;
        titleQuantity.innerHTML = '1';
        titleButton.innerHTML = "SUPPRIMER";

        titleButton.addEventListener('click', function(event){
            deleteArticle(event.target.id) // renvoi la fonction l.6
        })

        let space = document.createElement('hr');
        cartProduct.appendChild(space);
    }
}
// Total du panier **********************************************************************
const totalProduct = document.querySelector("#totalProducts");
const priceOfAll = document.querySelectorAll(".titlePrice")
let sum = 0
JSON.parse(localStorage.getItem('myCart')).forEach((data) => {
    sum += data.price/100;
    console.log(sum);
    totalProduct.innerHTML = sum + ",00 €";
});

