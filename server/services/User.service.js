const User = require('../models/user.model');

module.exports = class UserService {
    static async add_user(body) {
        const user = new User({
            fname: body.fname,
            lname: body.lname,
            email: body.email,
            role: body.role,
        });
        try {
            const newUser = await user.save();
            return newUser
        } catch (err) {
            throw Error(err);
        }
    }

    static async get_users ({page, pageCount}) {
        try {
            return {
                usersCount: await User.find({}).count(),
                users: await User.find({}).limit(+pageCount).skip((+page === 1 ? 0 : +page - 1) * +pageCount)
            };
        } catch (err) {
            throw Error(err);
        }
    }

    static async delete_user (userId) {
        try {
            return await User.findOneAndDelete({ _id: userId });
        } catch (err) {
            throw Error(err);
        }
    }

    static async update_user (dataForm) {
        try {
            const updatedUser =  await User.findOneAndUpdate(
                { _id: dataForm._id },
                { $set: {
                        email: dataForm.email,
                        fname: dataForm.fname,
                        lname: dataForm.lname,
                        role: dataForm.role,
                    } },
                {new: true, upsert: true }, () => {});
            return {
                ...updatedUser._doc,
            }
        } catch (err) {
            throw Error(err);
        }
    }
};
