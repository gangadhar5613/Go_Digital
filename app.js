let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
var path = require("path");

//connet to mongoDB from mongoose

mongoose.connect(
  "mongodb://localhost/godigital",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    console.log(err ? err : "database connected");
  }
);

let app = express();

//middleswares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routing middlewares

app.use("/", require("./routes/index"));

app.use("/card", require("./routes/card"));
app.use('/login', require('./routes/login'));
app.use('/dashboard',require('./routes/dashboard'))

//error page

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

//error handler
app.use((err, req, res, next) => {
  res.json(err);
});

//server port
app.listen(4000, () => {
  console.log("Server is listening at port 3000");
});
