const UserModel = require('../models/user.model');
const Service = require('./service');

class UserService extends Service {
    constructor(userModel) {
        super(userModel);
        // this.anyModel = anyModel (thru constructor param)
    }

    // here should write method specific for UserService only, and no need repeated common others
}

module.exports = new UserService(UserModel);
