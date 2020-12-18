// Récupération de chaque id de chaque produit*******************************************
const url = 'http://localhost:3000/api/cameras';

const params = new URLSearchParams(window.location.search);
const camId = params.get("id")
const myNewUrl = url + "/" + camId;
console.log(myNewUrl);

//Création de l'objet panier myCart**************************************************************
if(localStorage.getItem("myCart")){    //le panier existe déjà dans le localStorage
  console.log("Le panier existe bien!")
}else{    // Le panier n'existe pas, il va être envoyé dans le localStorage
  console.log("Création du panier")
  let initCart = [];
  localStorage.setItem("myCart", (JSON.stringify(initCart)))
}

let cart = JSON.parse(localStorage.getItem("myCart"))

// fetch de l'API et insertion de chaque élément du produit************************************

const section = document.querySelector('#allDescription')

fetch(myNewUrl)
 .then(response => response.json())
 .then(data => {
    console.log(data);
    
    let title = document.createElement('h2')
    let price = document.createElement('h4')
    let description = document.createElement('p')
    title.innerHTML = `${data.name}`;
    description.innerHTML = `${data.description}`;
    price.innerHTML = `€ ${data.price/100},00`;
    section.appendChild(title)
    section.appendChild(price)
    section.appendChild(description)
    document.querySelector('img');
    img.src = data.imageUrl;

    // Itération de chaque lentilles de chaque produit
    const dropdown = document.querySelector('select')
    data.lenses.forEach(element => {
        console.log(element)
        let lense = document.createElement('option');
        lense.classList.add('dropdown-item');
        lense.setAttribute('href', '#')
        dropdown.appendChild(lense);
        lense.innerHTML = element;
    });


  // Évènement sur le bouton lentilles ******************************************************
    function chosenLenses(){
      const selectElem = document.querySelector('select');

      selectElem.addEventListener('change', function() {  
        // let index = selectElem.selectedIndex;
        let indexValue = selectElem.options[selectElem.selectedIndex].value;
        console.log('Lentilles choisies: '+ indexValue);
        // console.log(index)
    })
  }
  chosenLenses();

  // Envoi les données au clic du bouton panier********************************************
    function addCart(){
      let btnCart = document.getElementById("cart-button");
      btnCart.addEventListener('click', function(){
        cart.push(data);
        localStorage.setItem("myCart", JSON.stringify(cart))
        console.log(data);
      })
    }
    addCart();
  })
.catch(error => console.log('ERROR'));

