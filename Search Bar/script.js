const list = ["alphabet","anguille","Amerique", "antilope","balaine","ballon","boule","beche","calculatrice"]
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

