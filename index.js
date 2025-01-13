const http = require('http');
const fs = require('fs'); //interact with file system
const url = require('url');

const port = 8080;
const server = http.createServer();

//start server and make sure port is running
server.listen(port, () => {
    console.log (`Server running on localhost:${port}`)
})


http.get('http://localhost:8080', res => {
  if (res.status == 200) {
    return ('hi')
  }
});

// fs.readFile('/home/xinyiyao/top-node-project/index.html','utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

