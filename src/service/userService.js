import bcrypt from 'bcryptjs';
import Bluebird from 'bluebird';
import mysql from 'mysql2/promise';

const salt = bcrypt.genSaltSync(10);

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

const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'abc',
        Promise: Bluebird,
    });
    let users = [];
    // connection.query(' SELECT *FROM users', function (err, results, fields) {
    //     if (err) {
    //         console.log(err);
    //         return users;
    //     }
    //     users = results;
    //     return users;
    // });
    try {
        const [rows, fields] = await connection.execute('select * from users');
        return rows;
    } catch (error) {
        console.log(error);
    }
};

export default {
    createNewUser,
    getUserList,
};
