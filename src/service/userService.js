import bcrypt from 'bcryptjs';
import Bluebird from 'bluebird';
import mysql from 'mysql2/promise';
import db from '../models';

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    const hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
};

const createNewUser = async (email, password, username) => {
    let hashPass = hashUserPassword(password);

    try {
        await db.User.create({
            username: username,
            email: email,
            password: hashPass,
        });
    } catch (error) {
        console.log('check error', error);
    }
};

const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'abc',
        Promise: Bluebird,
    });

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM user');
        return rows;
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'abc',
        Promise: Bluebird,
    });

    try {
        const [rows, fields] = await connection.execute('DELETE FROM user WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

export default {
    createNewUser,
    getUserList,
    deleteUser,
};
