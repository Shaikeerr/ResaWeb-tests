fetch('annonces.json').then(function(response) {
    response.json().then(function(data) {              //Récupère les données du JSON et les stocke dans une variable data
        console.log(data);
        for (let numCase = 0; numCase < data.length; numCase++) {
            const element = data[numCase]    //Execute la fonction analogies avec toutes les valeurs de data
            nouveautes(element)
        }
    })       
})

function nouveautes(x) {
    Slider_new = document.querySelector(".container")
    Slider_new.innerHTML+="<div class='box'>" + x.image + "<h1 class='Prix'>" + x.prix + "</h1>" + "<img class='Rubis' src='img/Rubis.png' alt=''>" + "<button class='Bouton'>  Voir l'annonce ↦ </button>" + "<h2>" + x.nom + "</h2>" + "<p>" + x.description + "</p>" + "</div>"
}