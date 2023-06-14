import connectDB from './db.js';

const db = connectDB();

// TESTING area

// db.serialize( () => {
//     db.run('SELECT * FROM colors LIMIT 10')
// });

db.all('SELECT * FROM colors LIMIT 10', (err, rows) => {
    if (err) {
        throw err;
    }

    console.log(rows);
})