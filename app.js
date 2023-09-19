const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('.'))

app.get('/', (req,res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`server is running on port ${port} and root is on ${__dirname}`);
});