var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic(__dirname, {'index': ['index.html']}));
app.listen(3000);
console.log("Listening at port 3000");