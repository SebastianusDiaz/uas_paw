let express = require("express");
const createError = require("http-errors");
path = require("path");
mongoose = require("mongoose");
cors = require("cors");
bodyParser = require("body-parser");
dbConfig = require("./db/database");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could not be connected :" + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());

const userRoute = require("./routes/index.route");
const { create } = require("./model/appointment.model");
// const { create } = require("./model/book.model");

app.use("/endpoint", userRoute);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log("Port connected to:" + port);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

// error handling
app.use(function (err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
