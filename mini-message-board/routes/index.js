const express = require('express');
const router = express.Router();

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  const {user, message} = req.body
  messages.push({
    text: message,
    user: user,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
