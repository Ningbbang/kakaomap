const express = require('express')
const path = require('path')
const app = express();
const port = 8080;
require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/', 'index.html'))
// });

app.get('/', (req, res) => {
    res.render('index', { apiKey : process.env.KAKAO_API_KEY});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});