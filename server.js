import express from 'express';
import fs from 'fs';
import connectLegoDB from './db.js';

const db = connectLegoDB();
const app = express();
app.use(express.static('static'))

app.get('/data/:year', (req, res) => {

    let query = `
        SELECT  sets.year, colors.rgb, SUM(inventory_parts.quantity) AS quantity
        FROM sets
        INNER JOIN inventories ON inventories.set_num = sets.set_num
        INNER JOIN  inventory_parts ON inventory_parts.inventory_id = inventories.id
        INNER JOIN colors ON colors.id = inventory_parts.color_id
        WHERE sets.year = ${req.params.year}
        GROUP BY colors.rgb
    `;

    db.all(query, (err, rows) => {
        if (err) {
            throw err;
        }

        // console.log(req.params.year);
        res.json(rows);
    });
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});