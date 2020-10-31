const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'waf.agency.mailer@gmail.com',
    pass: 'wearethefuture'
  }
});

const frontFolder = path.join(__dirname, 'build');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

app.use('/', express.static(frontFolder));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
