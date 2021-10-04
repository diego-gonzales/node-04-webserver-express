const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
});

// const server = http.createServer((req, res) => {
//     // res.write('Hello World');
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.writeHead(200, { 'Content-Type': 'application/json' });

//     const person = {
//         id: 1,
//         name: 'Diego'
//     };

//     res.write(JSON.stringify(person));
//     res.end();
// });
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Disposition', 'attachment; filename=myList.csv')
//     res.writeHead(200, { 'Content-Type': 'application/csv' });

//     res.write('id, name\n');
//     res.write('1, Diego\n');
//     res.write('2, Carlos\n');
//     res.write('3, Juan\n');
//     res.write('4, Luis\n');

//     res.end();
// });



server.listen(4000);

console.log('Listening on port', 4000);