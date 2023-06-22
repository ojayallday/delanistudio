const express = require('express');
const homeRouter = require ("./routes/home.js");

const app = express();


app.get('/', (req, res) => {
    res.send('<a href="/auth/goggle"> Login with Google <a>');
})

app.get('/protected', (req,res) => {
    res.send('Hello!');
})

//set view engine to ejs
app.set('view engine', "ejs")

// set middleware
app.use(homeRouter);

app.listen(5500, ()=>{
    console.log("Application is starting...")
})