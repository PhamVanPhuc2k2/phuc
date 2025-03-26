'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         *
         */

        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    email: 'mail1@gmail.com',
                    password: '123',
                    username: 'name1',
                },
                {
                    email: 'mail2@gmail.com',
                    password: '123',
                    username: 'name2',
                },
                {
                    email: 'mail3@gmail.com',
                    password: '123',
                    username: 'name3',
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
