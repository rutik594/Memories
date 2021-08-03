const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const dotenv = require('dotenv')
const PORT=process.env.PORT || 3001
//for handling post request by word handling i meant to say to unpack the body in which our data is there
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config()
// mongoose.set("bufferCommands", false);
//handles cross origin issue as our client and server are running on different parts in development mode. This doesnt need in production mode as our server and client side are on same port
app.use(cors());
const MONGO_URL =
process.env.MONGO_URL;
// (async() => {
try {
  mongoose.connect(
    MONGO_URL,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    async () => {
      await console.log("connected to mongodb");
    }
  );
} catch (err) {
  console.log(err.message);
}
/*app.get('/', (req, res) => {
  res.send('hello')
})*/
app.use("/api", postRoute);
app.use("/user", userRoute);
app.listen(PORT , () => {
  console.log("server up and running");
});
