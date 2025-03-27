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
    let users = [];
    users = await db.User.findAll();
    return users;
};

const deleteUser = async (userId) => {
    await db.User.destroy({
        where: {
            id: userId,
        },
    });
};

export default {
    createNewUser,
    getUserList,
    deleteUser,
};
