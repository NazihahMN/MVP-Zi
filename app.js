var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var cors = require("cors");

//line 6 baru tambah sendiri

// var indexRouter = require('./routes/index');
var requestsRouter = require('./routes/requests');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'kirim/build')));


// app.use('/', indexRouter);
app.use('/requests', requestsRouter);

// Baru tambah yang ni Anything that doesn't match the above, send back index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/kirim/build/index.html"));
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
