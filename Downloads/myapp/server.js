const express = require('express');
const app = express();

app.get("/", (res,res) => {
    res.setEncoding("Hello Tanuja, deployed successfully!");

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));