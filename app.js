const express = require('express');

const app = express();

const port = 3000;
const rutas = require('./routes/routes');

app.use(express.json());


app.use('/', rutas);


app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});

