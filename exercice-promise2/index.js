// votre déclaration de fonction ici
function testReduc(age) {
    return new Promise((resolve, reject) => {



        if (age <= 25) {
            resolve("Réduc jeune")
        }

        else if (age >= 65) {
            resolve("Reduc sénior")
        }

        else {
            reject("Tu as le droit a rien du tout")
        }


    })
}

window.addEventListener("DOMContentLoaded", () => {
    // votre appel de fonction ici
    testReduc(25)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    testReduc(65)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    testReduc(24)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    testReduc(8)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    testReduc(66)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    testReduc(90)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    testReduc(30)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    testReduc(50)
        .then(response => console.log(response))
        .catch(error => console.log(error));
});
