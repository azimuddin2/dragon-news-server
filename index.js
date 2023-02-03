const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/', (req, res) => {
    res.send('Dragon News Server Running!!')
})

app.listen(port, () => {
    console.log(`Dragon News app listening on port ${port}`)
})