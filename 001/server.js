const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
});

const server = app.listen(3000, function () {
    console.log(`Server Listening on port ${server.address().port}`);
});
