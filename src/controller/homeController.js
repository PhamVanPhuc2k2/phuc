// Get the client
import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'abc',
});

const handleHellWorld = (req, res) => {
    return res.render('home.ejs');
};

const handleUserPage = (req, res) => {
    return res.render('user.ejs');
};

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
        [email, password, username],
        function (err, results, fields) {
            console.log(results);
            console.log(fields);
        },
    );

    return res.send('handleCreateNewUser');
};

export default {
    handleHellWorld,
    handleUserPage,
    handleCreateNewUser,
};
