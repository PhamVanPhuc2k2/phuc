import userService from '../service/userService';

const handleHellWorld = (req, res) => {
    return res.render('home.ejs');
};

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    return res.render('user.ejs', {
        userList,
    });
};

const handleCreateNewUser = (req, res) => {
    let { email, password, username } = req.body;

    // userService.createNewUser(email, password, username);

    return res.send('handleCreateNewUser');
};

export default {
    handleHellWorld,
    handleUserPage,
    handleCreateNewUser,
};
