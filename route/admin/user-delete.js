const { User } = require('../../model/user');

module.exports = async (req, res) => {
    await User.findByIdAndDelete(req.query.id);
    res.redirect('/admin/user');
}