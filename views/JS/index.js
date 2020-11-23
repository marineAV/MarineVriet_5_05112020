 // appel de l'API ------->
 const url = 'http://localhost:3000/api/cameras';
 const section = document.querySelector('section');
 const main = document.querySelector('main');

 fetch(url)
 .then(response => response.json())
 .then(data => {
     console.log(data);
     for(let cameras of data){
         console.log(cameras);

         let product =
         `<div class='row'>
             <div class='col'>
                 <a href="#">
                     <img id="img" class="img-fluid rounded mb-3 mb-md-0" src="${cameras.imageUrl}" alt="${cameras.name}">
                 </a>
             </div>
             <div class="col-md-5">
                 <h2>${cameras.name}</h2>
                 <h4>€ ${cameras.price/100},00<h4>
                 <p style='font-size:15px;font-weight:lighter'>${cameras.description}</p>
                 <a class="btn btn-dark" href="produit.html?id=${cameras._id}">Voir le produit</a>
             </div>
         </div>
         <hr>`;
         section.innerHTML += product;
     }
 })
.catch(error => console.log('ERROR'))
