async function fetchData() {
    const tableBody = document.getElementById('people-teble');
    tableBody.innerHTML = '<tr><td colspan = "4" class="text-center">Carregnado dados...</td></tr>';

    try {
        const response = await fetch('https://dummyjson.com/users');
        if (response.ok) {
            throw new Error('Erro ao carregar os dados');
        }

        const data = await response.json();
        const users = data.users;
        tableBody.innerHTML = '';

    }

    users.forEach(function(user) {
        const row = 
        <tr>
            <td>$(user.id)</td>
            <td>$(user.firsName) $(user.lastName)</td>
            <td>$(user.email)</td>
            <td><img src ""
        </tr>
        
    });
    
}