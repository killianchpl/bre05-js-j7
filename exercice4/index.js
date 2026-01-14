let user = {
    firstName: "Harry",
    lastName: "Bow",
    motto: "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function() {
    // attribution variable sur sessionStorage
    let storageUser = sessionStorage.getItem("user");

    // début condition 
    // "si" sur storageUser, " elle n'existe pas"
    if (!storageUser) {

        // j'utilise donc stringify pour l'appeler
        let userJSON = JSON.stringify(user);

        // je la stocke dans sessionStorage avec set
        sessionStorage.setItem("user", userJSON)

        console.log("Utilisateur stocké :", user)
    }

    //" sinon", si elle existe: 
    else {
        // j'attribue une variable objet pour le storageUser
        let userObjet = JSON.parse(storageUser)

        // que j'affiche ensuite avec le log 

        console.log("utilisateur récupéré : ", userObjet);
    }

});


// ligne sessionStorage, attribution/
// " si " ( elle n'existe pas )  variable attribué/ 
// alors j'attribue le json que je fais ensuite apparaitre dans le sessionStorage/
// affichage console log

// "sinon" ( si elle existe ) j'attribue ma variable en js
// affichage console log
