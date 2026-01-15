let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/18"
);

fetch(url)

    .then(response => response.json())
    .then(data => {

        console.log(data);

        let user = data.data;

        let h1 = document.createElement('h1');
        h1.textContent = user.username;
        document.body.appendChild(h1);

        let h2 = document.createElement('h2');
        h2.textContent = user.firstName + ' ' + user.lastName;
        document.body.appendChild(h2);

        let h3 = document.createElement('h3');
        h3.textContent = user.email;
        document.body.appendChild(h3);




    })
    .catch(err => console.error(err));
