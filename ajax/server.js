const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require('multer');
const { axios } = require('./js/axios');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './upload')
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file, originalname}`);
  }
})

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end('Error');
    }

    res.end('Successfully concluded');
  })
})

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 1
  })
})

app.get('/par-ou-impar', (req, res) => {
  const par = parseInt(req.query.number) % 2 === 0;
  res.send({
    result: par ? 'par' : 'impar'
  })
})

app.listen(8080, () => console.log('Executando !!!'));