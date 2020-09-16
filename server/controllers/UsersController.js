const UserService = require('../services/User.service.js');
const User = require('../models/user.model');

module.exports = class UsersController {
    /**
     * Add User
     *
     * @param req{body} fname, lname, role, email
     * @param res
     * @return {Promise<{_id: *, data: *}|*>}
     */
    static async AddUser ({body}, res) {
        // Check if this user already exists
        const user = await User.findOne({ email: body.email });
        if (user) {
            return res.status(200).send({
                status: false,
                error: 'That user already exists!'
            });
        } else {
            try {
                await UserService.add_user(body);
                return res.status(200).send({
                    status: true,
                    message: 'User successfully added!',
                })
            } catch (error) {
                res.status(200).send({
                    status: false,
                    error: error.message,
                })
            }
        }
    }
    /**
     * Get All Users
     *
     * @param req{query}
     * @param res
     * @return {Promise<{data: *}|*>}
     */
    static async GetUsers ({query}, res) {
        try {
            const {users, usersCount} = await UserService.get_users(query);
            return res.status(200).send({
                status: true,
                users,
                usersCount
            })
        } catch (error) {
            res.status(403).send({
                status: false,
                error: error.message,
            })
        }
    }

    /**
     * Delete User
     *
     * @param req{query} id
     * @param res
     * @return {Promise<{data: *}|*>}
     */
    static async DeleteUser ({query}, res) {
        try {
            await UserService.delete_user(query.id);
            const userCount = await User.find({}).count();
            return res.status(200).send({
                status: true,
                userCount,
                message: 'The User was deleted!',
            })
        } catch (error) {
            res.status(403).send({
                status: false,
                error: error.message,
            })
        }
    }

    /**
     * Edit User
     *
     * @param req{body}
     * @param res
     * @return {Promise<{data: *}|*>}
     */
    static async EditUser ({body}, res) {
        try {
            const updatedUser = await UserService.update_user(body);
            return res.status(200).send({
                status: true,
                message: 'The User was updated!',
                user: updatedUser,
            })
        } catch (error) {
            res.status(403).send({
                status: false,
                error: error.message,
            })
        }
    }
};
