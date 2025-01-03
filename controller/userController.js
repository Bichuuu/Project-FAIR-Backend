const users = require('../Model/usermodel');
const jwt = require('jsonwebtoken')

exports.userRegister = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json('account already exist login!!')
        }
        else {
            const newUser = new users({ username, email, password, github: "", linkedin: "", profile: "" })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        req.status(401).json(err)
    }
}

// login 
exports.userLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_PASSWORD)
            res.status(200).json({ user: existingUser, token })
        }
        else {
            res.status(404).json("invalid username or password")
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}