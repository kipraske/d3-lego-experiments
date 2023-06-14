import express from 'express';
import fs from 'fs';
import connectLegoDB from './db.js';

const db = connectLegoDB();
const app = express();
app.use(express.static('static'))

app.get('/data', (req, res) => {
    res.send('Test Route!')
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
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