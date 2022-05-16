const express = require("express");
const formRouter = require("./formRouter");

const cors = require("cors");

const PORT = process.env.PORT || 80;

const app = express();

const corsOptions ={
  origin:'*', 
  credentials:true,           
  optionSuccessStatus:200,
};


app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", formRouter);

app.get("/", (req, res) => {
  res.send("OK")
})


const start = async () => {
  try {
     app.listen(PORT, () => console.log("ok"))
     
  } catch (e) {
     alert(e)
  }
}

start()



// 