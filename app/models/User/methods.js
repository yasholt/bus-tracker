module.exports = (User) => {

    User.createUser = async (user) => {
        try {
            await User.build(user).save();
            console.log('Created new user successfully');
            return {
                message: 'OK'
            };
        } catch (error) {
            console.error('Create new user error', error);
            return error;
        }
    };

    User.getAllUsers = async () => {
        try {
            const data = await User.findAll();
            console.log('Get all users successfully');
            return data;
        } catch (error) {
            console.error('Get all users error:', error);
            return error;
        }
    };

    User.deleteUser = async (userID) => {
        try {
            const data = await User
                .destroy({
                    where: {
                        id: userID
                    }
                });
            if (data !== 0) {
                console.log('User deleted successful');
                return {
                    message: 'OK'
                };
            } else {
                throw new Error('No user with such userID');
            }
        } catch (error) {
            console.error('User delete error:', error);
            return error;
        }
    };

    User.getUserByID = async (userID) => {
        try {
            const data = await User
                .findOne({
                    where: {
                        id: userID
                    }
                });
            if (data) {
                return data;
            } else {
                throw new Error('No user with such userID');
            }
        } catch (error) {
            console.error('User get error', error);
            return error;
        }
    };

    User.getUserByGoogleID = async (userGoogleID) => {
        try {
            const data = await User.findOne({
                where: {
                    userGoogleID: userGoogleID.toString()
                }
            });
            console.log('Successful get user by google id');
            return data
        } catch (error) {
            console.error('Error to get user by googleID:', error);
            return error;
        }
    };

    User.updateUser = async (userID, user) => {
        try {
            const data = await User.update(user, {
                where: {
                    id: userID
                }
            });

            if (data[0] !== 0) {
                console.log('Updated user successfully');
                return {
                    message: 'OK'
                };
            } else {
                throw new Error('No user with such userID');
            }

        } catch (error) {
            console.error('Update user error', error);
            return error;
        }
    };
};