import { Sequelize } from "sequelize";
import 'dotenv/config';

let db = {};

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
/*
(await db).User = User(sequelize, Sequelize);
(await db).Comment = Comment(sequelize, Sequelize);
(await db).Post = Post(sequelize, Sequelize);

(await db).User.associate(db);
(await db).Comment.associate(db);
*/
export default db;