let users = [];

// get form and tbody
const form = document.getElementById('userForm');
const tableBody = document.getElementById('tableBody');
const editIndexInput = document.getElementById('editIndex');

// add entry to users
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // get name & email
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (editIndexInput.value == "") {
        // add name & email to users
        users.push({ name, email });
    } else {
        // edit user
        users[editIndexInput.value] = { name, email };
        editIndexInput.value = "";
    }
    
    form.reset();
    console.log(users);
    displayUsers();
});

// display users inside table body
const displayUsers = () => {
    tableBody.innerHTML = "";
    users.forEach((user, index) => {
        tableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-warning" onclick="editUser(${index})">Edit</button>
                    <button class="btn btn-danger ms-3" onclick="deleteUser(${index})">Delete</button>
                </div>
            </td>
        </tr>
        `
    });
}

// used to edit particular user
const editUser = (index) => {
    document.getElementById('name').value = users[index].name;
    document.getElementById('email').value = users[index].email;
    editIndexInput.value = index;
}

// delete user
const deleteUser = (index) => {
    if (confirm("Are you sure, do you want to delete the data?")) {
        users.splice(index, 1);
        displayUsers();
    }
}