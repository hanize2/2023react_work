const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>test</h1>");
})

app.get("/aa",(req,res)=>{
    res.send("<h1>aatest</h1>");
})

app.get("/bbb",(req,res)=>{
    res.send("<h1>bbbb</h1>");
})


app.listen(9002, () => {
    console.log(`Example app listening at http://localhost:${9002}`);
});