const express = require('express');
const app = express();
const PORT = 5000;

app.get("/")

app.listen(PORT, () => {
    console.log("server listening on port: " + PORT);
});