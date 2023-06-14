import http from 'http';
import fs from 'fs';
import connectDB from './db.js';

const port = 3000
const db = connectDB();

const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not found')
        }else{
            res.write(data)
        }
        res.end()
    })

})

server.listen(port, function(error) {
    if (error) {
        console.log('An error has occured', error)

    } else {
        console.log('Server is running on port ' + port)
    }
})


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