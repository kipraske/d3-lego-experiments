import express from 'express';
import fs from 'fs';
import connectLegoDB from './db.js';

const db = connectLegoDB();
const app = express();
app.use(express.static('static'))

app.get('/data/:year', (req, res) => {
    db.all('SELECT * FROM colors LIMIT 10', (err, rows) => {
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

/**

brick_colors <- sets %>% left_join(inventories, by = "set_num") %>%
                         left_join(inventory_parts, by = c("id" = "inventory_id")) %>%
                         left_join(colors, by = c("color_id" = "id")) %>%
                         select(year, rgb, quantity) %>%
                         na.omit %>%
                         group_by(rgb, year) %>%
                         summarize(total = sum(quantity))


Notepad

SELECT  year,  rgb
FROM sets
LEFT JOIN inventories ON inventories.set_num = sets.set_num
LEFT JOIN  inventory_parts ON inventory_parts.inventory_id = inventories.id
LEFT JOIN colors ON colors.id = inventory_parts.color_id


SELECT  sets.year,  colors.rgb, SUM(inventory_parts.quantity) AS quantity
FROM sets
LEFT JOIN inventories ON inventories.set_num = sets.set_num
LEFT JOIN  inventory_parts ON inventory_parts.inventory_id = inventories.id
LEFT JOIN colors ON colors.id = inventory_parts.color_id
WHERE sets.year = 2006
GROUP BY colors.rgb

 */