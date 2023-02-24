const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("../build"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

   
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
})
