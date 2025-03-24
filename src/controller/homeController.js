const handleHellWorld = (req, res) => {
    return res.render('home.ejs');
};

const handleUserPage = (req, res) => {
    return res.render('user.ejs');
};

export default {
    handleHellWorld,
    handleUserPage,
};
