const router = require('express').Router()
const User = require('./User.js')
router.post('/users/register', async (req, res) => {
    try {
        let currentUser = await User.findOne({ email: req.body.email})
        if (currentUser) {
            throw new Error('This user alredy exsist!')
        } else {
            let { fullName, email, phoneNumber, password } = req.body
            let user = await User.create({ fullName, email, phoneNumber, password })
            res.json(user)
        }

    } catch (error) {
        res.status(400).json({message: error.message})
    }

})
module.exports = router