fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response){
        return response.json();
    }) 
    .then(function (data){
        console.log(data);
    })
    .then(function (error){
        console.error("Something went wrong: ", error);
    })


async function fetchUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        
        let tablebody = document.querySelector("#body");

        users.forEach(user => {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.address.street + " " + user.address.city}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>`;

            tablebody.appendChild(row);
        });
    }
    catch (err){
        console.error(err);
    }
}

fetchUsers();

async function LayDuLieu(url) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error){
        console.error("Loi khi lay API: ", error);
    }
}

LayDuLieu("https://jsonplaceholder.typicode.com/users");