import userService from '../service/userService';

const handleHellWorld = (req, res) => {
    return res.render('home.ejs');
};

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();

    await userService.deleteUser();

    return res.render('user.ejs', {
        userList,
    });
};

const handleCreateNewUser = (req, res) => {
    let { email, password, username } = req.body;

    userService.createNewUser(email, password, username);

    return res.redirect('/user');
};

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect('/user');
};

export default {
    handleHellWorld,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
};
