var createError = require("http-errors");
var express = require("express");
require('dotenv').config()
//const port = process.env.port;

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const Connexion = require("./connect");
const connect = new Connexion();

var indexRouter = require("./routes/index");
var reviewsRouter = require("./routes/reviews")
var usersRouter = require("./routes/users");
var usersClassRouter = require("./routes/userClass");
var userSubject = require("./routes/userSubject");
var tasksRouter = require("./routes/tasks");
var contactUs = require("./routes/contectus");
var recommendationsRouter = require("./routes/recommendations");
var dialogflow = require('./routes/dialogflow')

const bodyParser = require("body-parser");

var app = express();

// to avoid CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/reviews", reviewsRouter);
app.use("/users", usersRouter);
app.use("/usersClass", usersClassRouter);
app.use("/usersSubject", userSubject);
app.use("/tasks", tasksRouter);
app.use("/contactus", contactUs);
app.use("/recommendations", recommendationsRouter);
app.use("/api/dialogflow", dialogflow);





//app.listen(port, () => console.log(`server started on port ${port}`))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
