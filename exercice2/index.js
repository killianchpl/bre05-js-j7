window.addEventListener("DOMContentLoaded", function() {
    // ici je nomme la variable " username " et je lui attribu le nom
    let username = sessionStorage.getItem("username");
    // ici j(utilise " si " pour dire que si c'est bon, on affiche juste le prénom et le message de bvn)
    if (username) {

        window.alert("Bienvenue" + username);
    }
    // ici " sinon " je demande a l'utilisateur d'intéragir en donnant son nom
    else {

        const newUsername = window.prompt("Donne ton nom");
// et pour finir ici je dis " si " il a bien saisi et valider, on sauvegarde après dans un sessionStorage
        if (newUsername) {
            sessionStorage.setItem("username", newUsername);
        }
    }






});
