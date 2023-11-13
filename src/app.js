import express from 'express';
import 'dotenv/config';
import db from './db/connection.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

try {
    db.sequelize.sync({force: true})
    .then(() => {
      console.log('Drop and Resync with { force: true }')
    })
} catch (error) {
    console.log(error);
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
