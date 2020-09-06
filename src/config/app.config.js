
const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user: "JakobColladay",
    pass: "Jakon1357#",
    authSource: 'admin',
    keepAlive: true,
    keepAliveInitialDelay: 30000,
    
}


module.exports = {
    port: 3000,
    dbUrl: "mongodb://localhost:27017/Cytellix",
    dbOptions: dbOptions,
    secret: "jwtsecret",
    // Above would be moved to enviroment in production app
    models: [
        {
            name: "User",
            path: "user.model"
        },
        {
            name: "Post",
            path: "post.model"
        }
    ]
}