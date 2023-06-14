import express from 'express';
import fs from 'fs';
import connectLegoDB from './db.js';

const db = connectLegoDB();
const app = express();
app.use(express.static('static'))

app.get('/data', (req, res) => {
    db.all('SELECT * FROM colors LIMIT 10', (err, rows) => {
        if (err) {
            throw err;
        }

        res.json(rows);
    });
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
