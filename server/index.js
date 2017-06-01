const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const certPath = path.join(__dirname, 'certs');
const ENV = process.env.ENV;
const app = express();
const ports = {
    http: 8082,
    https: 8083
};

let server;

try {
    const crt = fs.readFileSync(path.join(certPath, 'server.crt'));
    const key = fs.readFileSync(path.join(certPath, 'server.key'));

    server = https.createServer({
        cert: crt,
        key: key
    }, app);
} catch (e) {}

let clientPath = path.join(__dirname, '../client');
// let clientPath = path.join(__dirname, '../client-SA');

if (/^prod/i.test(ENV)) {
    clientPath = path.join(clientPath, '/build/production/PWA');
} else if (/^test/i.test(ENV)) {
    clientPath = path.join(clientPath, '/build/testing/PWA');
}

app.use(express.static(path.join(__dirname, 'api')));
app.use(express.static(clientPath));

console.log(`Client app will be loaded from ${clientPath}`);

app.listen(ports.http, () => {
    console.log(`Non-Secure Server listening on port ${ports.http}`);
});

if (server) {
    server.listen(ports.https, () => {
        console.log(`Secure Server listening on port ${ports.https}`);
    });
}
