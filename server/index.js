const express = require('express');
const app = express();
const path = require('path');
const ENV = process.env.ENV;
const port = 8082;

let clientPath = path.join(__dirname, '../client');

if (/^prod/i.test(ENV)) {
    clientPath = path.join(clientPath, '/build/production/PWA');
} else if (/^test/i.test(ENV)) {
    clientPath = path.join(clientPath, '/build/testing/PWA');
}

app.use(express.static(path.join(__dirname, 'api')));
app.use(express.static(clientPath));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Client app will be loaded from ${clientPath}`);
});
