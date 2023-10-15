//* Definisikan class untuk data pengguna
class user {
    constructor(id, nama, email) {
        this.id = id;
        this.nama = nama;
        this.email = email;
    }
}


//* Simulasikan data pengguna
const users = [
    new user(1, "yulianto", "yulianto@gmail.com"),
    new user(2, "Kwon Yuli", "kwonyuli@gmail.com"),
    new user(3, "julian", "julian@gmail.com")
];

//* export data users
export {users};
