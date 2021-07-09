const config = {
    mongoConfig: {
        templateConnectionString: 'mongodb+srv://userMongoDB:'
            + '<password>@mongoclusterexpresscrud.4pswn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        get connectionString() {
            return this.templateConnectionString
                .replace('<password>', process.env.PASSWORD)
                .replace('myFirstDatabase', process.env.DB);
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
                useCreateIndex: this.useCreateIndex,
            };
        },
    },
};

module.exports = config;
