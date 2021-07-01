'use strict';

const config = {
    mongoConfig: {
        project: 'mongoExpressCRUD_2.0',
        cluster: 'mongoClusterExpressCRUD',
        db: 'mongoDBExpressCRUD',
        collections: ['Notes'],
        user: 'userMongoDB',
        password: '49tiGiRqaWxNBGH',
        templateConnectionString: `mongodb+srv://userMongoDB:<password>@mongoclusterexpresscrud.4pswn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        instruction: `Replace <password> with the password for the userMongoDB user. Replace myFirstDatabase with the name
                  of the database that connections will use by default. Ensure any option params are URL encoded.`,
        get connectionString() {
            return this.templateConnectionString
                .replace('<password>', this.password)
                .replace('myFirstDatabase', this.db)
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        get connectionParams() {
            return {
                useNewUrlParser: this.useNewUrlParser,
                useUnifiedTopology: this.useUnifiedTopology,
                useFindAndModify: this.useFindAndModify,
                useCreateIndex: this.useCreateIndex
            }
        }
    }
}

module.exports = config;
