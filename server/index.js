const express = require('express');
const cors = require('cors');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);
app.use(cors({
    origin: 'http://localhost:8080',
}))

app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

const validateForm = require('./validate');

app.use('/validate', validateForm);

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});