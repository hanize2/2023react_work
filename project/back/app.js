const express = require('express');
const cors = require('cors');

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const boardRouter = require("./routes/boardRouter");

app.use("/auth",authRouter);
app.use("/users",userRouter);
app.use("/board",boardRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
