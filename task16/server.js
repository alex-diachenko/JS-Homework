// запрос с браузера на сервер

let xhr = new XMLHttpRequest();

xhr.open('POST', 'http://localhost:3000/answer');
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(JSON.stringify({ name: 'SERGEi', lastName: 'SHAKHOV' }));

xhr.onload = function() {
  if (xhr.status == 200) { 
	console.log(JSON.parse(xhr.responseText))
  }
};



// сервер

const http = require('http'); // подключаем http модуль!
http.createServer((req, res) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', '*');
     if(req.url === '/data') {
          res.end('success');
     } else if(req.url === '/answer') {
          let body = '';
          req.on('data', (chunk) => {
               body = String(chunk);
               console.log(JSON.parse(body));
          }).on('end', () => {
               res.end(body);
          })
     }else  res.end('HELLO WORLD');

}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000) );
