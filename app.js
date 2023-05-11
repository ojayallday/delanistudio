const express = require('express');
const homeRouter = require ("./routes/home");

const app = express();
//det view engine to ejs
app.set('view engine', "ejs")
// set middleware
app.use(homeRouter);

app.listen(5500, ()=>{
    console.log("Application is starting...")
})