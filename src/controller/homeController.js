import userService from '../service/userService';

const handleHellWorld = (req, res) => {
    return res.render('home.ejs');
};

const handleUserPage = (req, res) => {
    return res.render('user.ejs');
};

const handleCreateNewUser = (req, res) => {
    let { email, password, username } = req.body;

    // userService.createNewUser(email, password, username);

    userService.getUserList();

    return res.send('handleCreateNewUser');
};

export default {
    handleHellWorld,
    handleUserPage,
    handleCreateNewUser,
};
