var express = require('express')
var mongoClient = require('mongodb').MongoClient
var assert = require('assert')
var objectId = require('mongodb').ObjectID
var router = express.Router()

var url = 'mongodb://localhost:27017/testdb'

var app = express()

app.use(express.static(__dirname + '/pages'))

app.get('/getData', function (req, res, next) {
  var resultArray = []
  mongoClient.connect(url, function (err, db) {
    var cursor = db.collection('testPage').find()
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

router.post('/pages/insert', function (req, res, next) {
  var item = {
    feedback: req.body.feedback
  }

  mongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    db.collection('testPage').insertOne(item, function (err, result) {
      assert.equal(null, err)
      console.log('item inserted')
      db.close()
    })
  })

  req.redirect('/pages/feedback.html')
})

app.post('/update', function (req, res, next) {})

app.post('/delete', function (req, res, next) {})

app.listen(3000, function () {
  console.log('Running on port 3000')
})
