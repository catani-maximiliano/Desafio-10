require("dotenv").config();

module.exports = {
    dbConnet: process.env.CONNECT,
    dbSessionName: process.env.DB_SESSION_NAME,
}