#!/usr/bin/env node

const http = require('http')
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from Fake IdP'))

http.createServer(app).listen(3999)

