var logger          = require('morgan'),
    cors            = require('cors'),
    http            = require('http'),
    express         = require('express'),
    errorhandler    = require('errorhandler'),
    dotenv          = require('dotenv'),
    multer          = require('multer'),
    bodyParser      = require('body-parser');

var upload = multer({dest: './uploads'});
var app = express();

dotenv.load();

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler());
}

// app.use('/static', express.static('../client/build/static'));

app.post('/upload', upload.single('file'), function(req, res, next) {
  console.log(req.file);
  console.log(req.body.filename);
  if (req.file) {
    console.log('hey, Im a file and Im here!!');
  } else {
    console.log('ooppss, may be you are running the IE 6 :(');
  }
  res.status(200).send('ok').end();
});


app.use(require('./user-routes'));
app.use(require('./protected-routes'));
app.use(require('./anonymous-routes'));

var port = process.env.PORT || 3001;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

