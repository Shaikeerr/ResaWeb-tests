let list = ["arbre", "balle", "chaise", "dame", "éléphant", "fleur", "guitare", "hôtel", "île", "jupe", "kiwi", "lampe", "montagne", "neige", "orange", "pomme", "quai", "rouge", "soleil", "téléphone", "uniforme", "vélo", "xylophone", "yacht", "zebu", "abricot", "boule", "chanson", "départ", "escalier", "feuille", "goutte", "hiver", "jaune", "kilomètre", "lait", "manger", "nuage", "orangeade", "piscine", "quatre", "rouge-gorge", "soleil-levant", "télévision", "uniformément", "vent", "xylophoniste", "yéti", "zinc", "amour", "bateau", "château", "doigt", "élément", "fenêtre", "garçon", "heure", "image", "jardin", "kilogramme", "lampe-torche", "maison", "nuit", "ordinateur", "poulet", "quand", "rose", "souris", "tambour", "usine", "voiture", "xylophone-solo", "yak", "zèbre", "arc-en-ciel", "blanc", "camion", "dent", "éléphantiasis", "frère", "girafe", "hache", "île-aux-tresors", "jouet", "kiwi-fruit", "lit", "marché", "navire", "orange-sanguine", "papillon", "quartz", "rougeoyant", "soleil-couchant", "tarte", "unique", "vague", "xylographe", "yogourt", "zoo", "avion", "bague", "chocolat", "dictionnaire", "élévation", "famille", "gâteau", "histoire", "immeuble", "journal", "kiwi-juteux", "laine", "mariage", "nourriture", "oiseau", "piano", "quiche", "rayé", "sac", "téléphone-portable", "utile", "vérité", "xylophonique", "yo-yo", "zèle", "amande", "banane", "champignon", "dragon", "étoile", "flamme", "grenouille", "hibou"];
let resultats_recherche = []

function rechercher() {
        resultats_recherche=[]
        var element = document.getElementById("outil_recherche").value 
        console.log(element)
        if (element.length != 0) {
            for (let i = 0; i < list.length; i++) {
                const index = list[i];
                if((index.toLowerCase().includes(element))==true) {
                    console.log("true")
                    resultats_recherche.push(index)
                    console.log(resultats_recherche)
                };
        }
    }


    if (resultats_recherche.length==0) {
        document.querySelector(".box_resultats").innerHTML="Aucun résultat"
    }
    else {
        document.querySelector(".box_resultats").innerHTML=resultats_recherche
    }

}


function rechercher_enter(e) {
    if (e.keyCode === 13) {
        resultats_recherche=[]
        var element = document.getElementById("outil_recherche").value 
        console.log(element)
        if (element.length != 0) {
            for (let i = 0; i < list.length; i++) {
                const index = list[i];
                if((index.toLowerCase().includes(element))==true) {
                    console.log("true")
                    resultats_recherche.push(index)
                    console.log(resultats_recherche)
                };
            
        }
    }


    if (resultats_recherche.length==0) {
        document.querySelector(".box_resultats").innerHTML="Aucun résultat"
    }
    else {
        document.querySelector(".box_resultats").innerHTML=resultats_recherche
    }
}
}

