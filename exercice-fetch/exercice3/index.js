let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/create-user"
);

let formData = new FormData();
formData.append('username', "Insanity");
formData.append('firstName', "Killian");
formData.append('lastName', "Chapelain");
formData.append('email', "killian.chapelain@3wa.io");

let body = {
    method: 'POST',
    body: formData
};


fetch(url, body)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
