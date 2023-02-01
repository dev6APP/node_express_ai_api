var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var phoneDetectionRouter = require('./routes/phone_detection');
var droneBigImgDetectionRouter = require('./routes/d_img_big');
var droneBigImgRoboflowDetectionRouter = require('./routes/d_rf_img_big');
// // var flowersRouter = require('./routes/flowers');


app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '999mb' }));
// parse application/json
app.use(bodyParser.json({ limit: '999mb' }));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/phone-big-img-y5', phoneDetectionRouter);
app.use('/drone-big-img-y5', droneBigImgDetectionRouter);
app.use('/drone-big-img-rf', droneBigImgRoboflowDetectionRouter);


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//TODO: Fix this error handler
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////












































module.exports = app;