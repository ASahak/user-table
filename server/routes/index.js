const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UsersController');

const {
    UserValidator,
} = require('../validators');
const middleware = require('../middleware');

//Add User
router.post('/users/add', middleware(UserValidator, (res, error) => {
    res.status(200).send({error})
}), UserController.AddUser);

//Get Users
router.get('/users/getAll', UserController.GetUsers);

//Delete User
router.delete('/users/delete', UserController.DeleteUser);

//Edit User
router.put('/users/edit', UserController.EditUser);

module.exports = router;
