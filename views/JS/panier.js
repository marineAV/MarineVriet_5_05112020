const panier = JSON.parse(localStorage.getItem('myCart'));
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

if(panier.length === 0){ // Si localStorage vide alors "Votre panier est vide"
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
// Total du panier hors livraison**********************************************************************
const totalProduct = document.querySelector("#totalProducts");
const totalWithDelivery = document.querySelector(".totalProducts");
const priceOfAll = document.querySelectorAll(".titlePrice");
let sum = 0
JSON.parse(localStorage.getItem('myCart')).forEach((data) => {
    sum += data.price/100;
    console.log(sum);
    totalProduct.innerHTML = sum + ",00 €";
    totalWithDelivery.innerHTML = sum + ",00 €";
});

// fonction pour afficher la livraison lors de sa sélection
const delivery = document.getElementById('deliveryPrice');
const selectDelivery = document.querySelector('select');
const totalDelivery = document.getElementById('totalDelivery');

    selectDelivery.addEventListener('change', function() {  
    let valueOfChoice = selectDelivery.options[selectDelivery.selectedIndex].value;
    console.log('Livraison: '+ valueOfChoice);
        if(valueOfChoice === "5"){
            delivery.innerHTML = "5,00";
            let normalDelivery = 5 + sum + ",00 €";
            console.log(normalDelivery);
            totalWithDelivery.innerHTML = normalDelivery;
        }else if(valueOfChoice === "2"){
            delivery.innerHTML = "2,00";
            let mondialRelayDelivery = 2 + sum + ",00 €";
            console.log(mondialRelayDelivery);
            totalWithDelivery.innerHTML = mondialRelayDelivery;
        }
    })

// Check si le panier est vide***********************************************************
function checkCart(){
    let panier = JSON.parse(localStorage.getItem('myCart'));
    if(panier.length === 0){
        console.log("Pas d'articles, pas de confirmation de commande!");
        return false;
    }else{
        console.log("Articles en vu, la confirmation de commande va arriver");        
        return true
    }
}
 checkCart();

// Check les input du formulaire*********************************************************
let submit = document.getElementById('submit');

submit.addEventListener('click', checkForm) 

function checkForm(){

    let name = document.getElementById("name").value;
    let firstName = document.getElementById('firstName').value;
    let mailAddress = document.getElementById('mailAddress').value;
    let inputAddress = document.getElementById('inputAddress').value;
    let postal = document.getElementById('postal').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country');
    let valueIndex = country.selectedIndex;
        console.log('Pays choisis: '+ valueIndex);
    
    let regexName = /^[a-zA-Zéèîï]+$/;
    let regexFirstName = /^[a-zA-Zéèîï]+$/;
    let regexMail = /^[a-zA-Z0-9éèîï_.\-]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]+$/;
    let regexAddress = /^[a-zA-Z0-9éèîï\-\ ]+$/;
    let regexPostal = /^[0-9]{5}$/;
    let regexCity = /^[a-zA-Zéèîï]+$/;

    if(regexName.test(name) == false){
        let advertising = document.querySelector('.nameClass')
        advertising.innerHTML = "Votre nom n'est pas valide";
        console.log(regexName.test(name));
    
    }else if(regexFirstName.test(firstName) == false){
        let badFirstName = document.querySelector('.firstNameClass')
        badFirstName.innerHTML = "Votre prénom n'est pas valide";
        console.log(regexFirstName.test(firstName));
    
    }else if(regexMail.test(mailAddress) == false){
        let badMail = document.querySelector('.mailClass')
        badMail.innerHTML = "Votre e-mail n'est pas valide";
        console.log(regexMail.test(mailAddress));

    }else if(regexAddress.test(inputAddress) == false){
        let badAddress = document.querySelector('.addressClass')
        badAddress.innerHTML = "Votre adresse n'est pas valide";
        console.log(regexAddress.test(inputAddress));
    
    }else if(regexPostal.test(postal) == false){
        let badPostal = document.querySelector('.postalClass')
        badPostal.innerHTML = "Votre code postal n'est pas valide";
        console.log(regexPostal.test(postal));

    }else if(regexCity.test(city) == false){
        let badCity = document.querySelector('.cityClass')
        badCity.innerHTML = "Votre ville n'est pas valide";
        console.log(regexCity.test(city));
    
    }else if(!valueIndex >= 1){
        let badCountry = document.querySelector('.countryClass')
        badCountry.innerHTML = "Veuillez choisir un pays";
        console.log("ok!")
    }
};

// Récupère les valeurs de chaque input
let contactForm = {
    name : document.getElementById("name").value,
    firstName : document.getElementById('firstName').value,
    mailAddress : document.getElementById('mailAddress').value,
    inputAddress : document.getElementById('inputAddress').value,
    postal : document.getElementById('postal').value,
    city : document.getElementById('city').value,
    country : document.getElementById('country').value,
};

// Envoi du formulaire

// fetch("http://localhost:3000/api/cameras/order",{
//     headers : {
//         'Accept' : 'application/json',
//         'Content-type' : 'application/json',   
//     },
//     method : "POST",
//     body : JSON.stringify(contactForm)
// })
// .then(function(res){
//     return res.json()
// })