var express = require('express')
var mongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')
var http = require('http')
var url = require('url')
/* var assert = require('assert') 
var objectId = require('mongodb').ObjectID
var router = express.Router()*/

/* var url = 'mongodb://localhost:27017/testdb' */

var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname + '/pages'))

app.get('/getData', function (req, res, next) {
  var resultArray = []
  mongoClient.connect(url, function (err, db) {
    var cursor = db.collection('testdb').find()
    cursor.forEach(function (doc, err) {
      resultArray.push(doc)
      assert.equal(null, err)
    }, function () {
      db.close()
      res.render('/pages/feedback.html', {
        item: resultArray
      })
    })
  })
})

app.post('/insertFeedback', urlencodedParser, function (req, res, next) {
  /* res.writeHead(200, {'Content-Type': 'text/plain'})
  var params = url.parse(req.url, true).query */
  var item = {
    feedback: req.body.feedback
  /* feedback: 'test',
  test: 'testRout' */
  }

  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err

    var db = client.db('btt')
    db.collection('feedback').insertOne(item, function (err, result) {
      /* assert.equal(null, err) */
      if (err) throw err
      console.log('item inserted')
      client.close()
    })
  })

  res.redirect('/feedback.html')
})

app.post('/update', function (req, res, next) {})

app.post('/delete', function (req, res, next) {})

app.listen(3000, function () {
  console.log('Running on port 3000')
})
