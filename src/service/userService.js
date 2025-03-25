import bcrypt from 'bcryptjs';
import mysql from 'mysql2';

const salt = bcrypt.genSaltSync(10);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'abc',
});

const hashUserPassword = (userPassword) => {
    const hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
};

const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password);

    connection.query(
        ' INSERT INTO users (email, password, username) VALUES (?, ?, ?) ',
        [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        },
    );
};

const getUserList = () => {
    let user = [];
    connection.query(' SELECT *FROM users', function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log('check results: ', results);
    });
};

export default {
    createNewUser,
    getUserList,
};
