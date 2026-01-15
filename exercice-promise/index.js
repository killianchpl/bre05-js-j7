// votre déclaration de fonction ici
function testAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Autorisation accordée")
        }
        else {
            reject("Autorisation refusée")
        }


    })
}

window.addEventListener("DOMContentLoaded", () => {
    // votre appel de fonction ici
    testAge(42)
        .then(response => console.log(response))
        .catch(error => console.log(error));



    testAge(16)
        .then(response => console.log(response))
        .catch(error => console.log(error));


    testAge(78)
        .then(response => console.log(response))
        .catch(error => console.log(error));


    testAge(18)
        .then(response => console.log(response))
        .catch(error => console.log(error));


    testAge(102)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    testAge(2)
        .then(response => console.log(response))
        .catch(error => console.log(error));
});
