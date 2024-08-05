const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Especificar los campos que necesitas
        const user = await User.findOne({ email: email.toLowerCase() }).select('email password name image');
        if (!user || !(await user.comparePassword(password))) {
            return res.status(404).json({ message: 'Usuario o contraseña incorrectos' });
        }
        const token = jwt.sign({ id: user._id }, "1234", { expiresIn: '1d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
        });
        res.status(200).json({
            id_user: user._id,
            email: user.email,
            name: user.name,
            image: user.image
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.logout = async (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    return res.sendStatus(200);
}

exports.register = async (req, res) => {
    const { email, password, name, image } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email: email.toLowerCase(), password: hashedPassword, image });
        await newUser.save();
        res.status(201).send('user registered');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
