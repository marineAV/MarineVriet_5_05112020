// Récupération de chaque id de chaque produit*******************************************
const url = 'http://localhost:3000/api/cameras';

const params = new URLSearchParams(window.location.search);
const camId = params.get("id")
const myNewUrl = url + "/" + camId;
console.log(myNewUrl);

const section = document.querySelector('#allDescription')

// fetch de l'API et insertion de haque élément du produit
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
})
.catch(error => console.log('ERROR'));

// Évènement sur le bouton lentilles******************************************************
const selectElem = document.querySelector('select');

//  const chosenLensesValue = selectElem.addEventListener('change', function() {
  // var index = selectElem.selectedIndex;
  // var indexValue = selectElem.options[selectElem.selectedIndex].value;
  // console.log('Lentilles choisies: '+ indexValue);
  // console.log(index)
// })

// Validation de la quantité
function generate(){
    const chosenLensesValue = selectElem.addEventListener('change', function() {
      var indexValue = selectElem.options[selectElem.selectedIndex].value;
    })
    if(chosenLensesValue >= 1){
      const button = document.getElementById('basket-button').addEventListener('click', function(){
        alert("Votre produit vient d'être ajouté à votre panier!");
        });
    }else{
      const warn = document.createElement('p');
      buttonForm.appendChild(warn);
      warn.innerText = `Veuillez choisir la quantité!`;
    }
 };

  const panier = document.getElementById('basket-button').addEventListener('click',function(){
    console.log("BIM! C'est dans le panier!");
  })


