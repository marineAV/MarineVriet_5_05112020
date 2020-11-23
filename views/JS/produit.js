// const url = 'http://localhost:3000/api/cameras'; //Comment générer tous les objets???
// const myNewUrl = new URL('/_id=5be1ed3f1c9d44000030b061', url);
// console.log(myNewUrl);
// const paramsId = window.location.search.substr(1);

const section = document.querySelector('.col-md-5')
// console.log(params.toString());
function getId(){
    const params= window.location.search;
    console.log(window.location)
    const id = params.replace("?id=", "");
    return id
}

// const url = 'http://localhost:3000/api/cameras';
// const myNewUrl = new URL(url + getId);
// const newParams = new URLSearchParams(myNewUrl);
// console.log(newParams);


fetch("http://localhost:3000/api/cameras/"+ getId)
 .then(response => response.json())
 .then(data => {
     console.log(data);

    // let title = document.createElement('h2')
    //  let price = document.createElement('h4')
    //  let description = document.createElement('p')
    // title.innerHTML = `${data.name}`;
    //  description.innerHTML = `${data.description}`;
    //  price.innerHTML = `€ ${data.price/100},00`;
    //  section.append(title)
    //  section.append(price)
    //  section.append(description)
    //  document.querySelector('img');
    //  img.src = data.imageUrl;


    //  for(let cameras of data){
    //     const identity = `${cameras._id}`;
    //     console.log(identity);
    //     document.querySelector('img');
    //     img.src = cameras.imageUrl;    
  
    //     document.querySelector('h2').innerHTML = `${cameras.name}`;
    //     document.querySelector('p').innerHTML = `${cameras.description}`;
    //     document.querySelector('h4').innerHTML = `€ ${cameras.price/100},00`;
    //  }
 })
//  .catch(error => console.log('ERROR'));

// Validation de la quantité
// function generate(){
//     let buttonForm = document.getElementById('numberOfCameras').addEventListener('change', function(event){
//         let value = event.target.value;
//         if(value >= 1){
//             const button = document.getElementById('basket-button').addEventListener('click', function(){
//                 alert("Votre produit vient d'être ajouté à votre panier!");
//             });
//         }else{
//             const warn = document.createElement('p');
//             buttonForm.appendChild(warn);
//             warn.innerText = `Veuillez choisir la quantité!`;
//         }
//     })
// };


// const lenses = document.getElementById('lensesChoice').addEventListener('change',function(e){
//     console.log("lentilles choisies: " + e.target.value);
// })

function generate(){
    const panier = document.getElementById('basket-button').addEventListener('click',function(events){
        console.log("C'est cliqué!");
    })
};          