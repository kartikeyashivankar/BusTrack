const authController = {
  login: (req, res) => {
    res.json({ message: 'Login controller' });
  },
  logout: (req, res) => {
    res.json({ message: 'Logout controller' });
  }
};

module.exports = authController;
