function addTransaction() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amt = document.getElementById('amt').value;
    
    if (type === "" || name === "" || amt === "") {
        alert("All fields are neccessary");
        return false;
    }

    const table = document.getElementById('table');
    const row = table.insertRow();
    const typeCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const amtCell = row.insertCell(2);
    const optionsCell = row.insertCell(3);

    typeCell.innerHTML = type;
    nameCell.innerHTML = name;
    amtCell.innerHTML = amt;
    optionsCell.innerHTML = '<button id="del" onclick="del()">Delete</button>';

    document.getElementById('type').value = '';
    document.getElementById('name').value = '';
    document.getElementById('amt').value = '';
}

function del(){
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}