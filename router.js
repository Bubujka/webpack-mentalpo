#!/usr/bin/env node

const app = require('express')();
const hpm = require('http-proxy-middleware');

app.use('/api', hpm({target: 'http://127.0.0.1:3002'}));
app.use(hpm({target: 'http://127.0.0.1:3001'}));

app.listen(3000);

