//* import data module
import { users } from "./data-users.js";


//* Ambil elemen tbody dari tabel
const tableBody = document.getElementById('data-table-body');

//* Tambahkan data ke dalam tabel
users.forEach(user => {
    const row = `<tr>
                    <td>${user.id}</td>
                    <td>${user.nama}</td>
                    <td>${user.email}</td>
                </tr>`;
    tableBody.innerHTML += row;
});
