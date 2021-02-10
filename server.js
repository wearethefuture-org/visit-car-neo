const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'waf.agency.mailer@gmail.com',
    pass: 'wearethefuture'
  }
});

const frontFolder = path.join(__dirname, 'build');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  const host = req.get('Host');

  if (/^www\./.test(host)) {
    const url = host.replace(/^www\.?/i, "").split('/')[0];
    return res.redirect(301, `${url + req.originalUrl}`);
  }

  if (/\/\/$/.test(req.originalUrl)) {
    return res.redirect(301, '/');
  }

  if (/index\.html$/.test(req.originalUrl)) {
    return res.redirect(301, '/');
  }

  return next();
});

app.post('/send', function(req, res) {
  return transporter.sendMail({
    from: `${req.body.name} <${req.body.email}>`,
    to: 'weathefuture@gmail.com',
    subject: req.body.message
  })
  .finally(() => {
    res.send({ success: true })
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(frontFolder, 'index.html'));
});

app.get('/portfolio/:id', function(req, res) {
  res.sendFile(path.join(frontFolder, 'index.html'));
});

app.get('/404', function(req, res) {
  res.sendFile(path.join(frontFolder, 'index.html'));
});

app.use('/', express.static(frontFolder));

app.use(function (req, res, next) {
  res.status(404);

  res.format({
    html: function () {
      res.redirect('/404');
    },
    json: function () {
      console.log('json')
      res.json({ error: 'Not found' })
    },
    default: function () {
      console.log('txt')
      res.type('txt').send('Not found')
    }
  })
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
