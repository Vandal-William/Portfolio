const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("build", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });

   
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
})
