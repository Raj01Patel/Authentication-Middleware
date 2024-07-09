const express = require('express');
const morgan = require('morgan');
const requestLogger = require('./requestLogger');

const app = express();
const PORT = 3000;
app.use(express.json())

app.use(morgan('combined'));
app.use(requestLogger);

app.get('/', (req, res) => {
    res.send("Hello, World!");
})

app.post('/data', (req, res) => {
    res.send('Data received');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})