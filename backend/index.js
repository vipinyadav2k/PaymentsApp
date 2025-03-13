const express = require("express");
const cors = require("cors");
const MainRouter = require("./routes/index");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1",MainRouter);

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})


