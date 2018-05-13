var express = require('express')
var mongoClient = require('mongodb').MongoClient
var objectId = require('mongodb').ObjectID
var bodyParser = require('body-parser')
var http = require('http')
var url = require('url')
/* var assert = require('assert') 
var objectId = require('mongodb').ObjectID
var router = express.Router()*/

/* var url = 'mongodb://localhost:27017/testdb' */

var app = express()

var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.use(express.static(__dirname + '/pages'))

app.get('/getData', urlencodedParser, function (req, res, next) {
  var resultArray = []
  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err
    var db = client.db('btt')
    var cursor = db.collection('testTable').find()
    cursor.forEach(function (doc, err) {
      resultArray.push(doc)
      console.log('select juhu')
      if (err) throw err
      /*  assert.equal(null, err) */
    }, function () {
      client.close()
      /* res.render('/tourPlans', {
        item: resultArray
      })*/
    })
    res.redirect('/tourPlans.html')
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

app.post('/insertRegister', urlencodedParser, function (req, res, next) {
  /* res.writeHead(200, {'Content-Type': 'text/plain'})
  var params = url.parse(req.url, true).query */
  var item = {
    firstSign: req.body.firstSign,
    lastSign: req.body.lastSign,
    email: req.body.emailSign,
    passSign: req.body.passSign
    /* feedback: 'test',
    test: 'testRout' */
  }

  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err

    var db = client.db('btt')
    db.collection('login').insertOne(item, function (err, result) {
      /* assert.equal(null, err) */
      if (err) throw err
      console.log('item inserted')
      client.close()
    })
  })
  res.redirect('/index.html')
})

app.post('/insertRequest', urlencodedParser, function (req, res, next) {
  /* res.writeHead(200, {'Content-Type': 'text/plain'})
  var params = url.parse(req.url, true).query */
  var item = {
    igman: req.body.igman,
    mostar: req.body.mostar,
    jajce: req.body.jajce,
    konjic: req.body.konjic,
    bjelasnica: req.body.bjelasnica,
    trebevic: req.body.trebevic,
    sarajevo: req.body.sarajevo,
    jahorina: req.body.jahorina,
    length: req.body.length,
    budget: req.body.budget,
    people: req.body.people,
    zima: req.body.zima,
    ljeto: req.body.ljeto,
    proljece: req.body.proljece,
    jesen: req.body.jesen,
    interpreterYes: req.body.yes,
    interpreterNo: req.body.no,
    price: req.body.price,

    /* feedback: 'test',
    test: 'testRout' */
  }

  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err

    var db = client.db('btt')
    db.collection('requestTour').insertOne(item, function (err, result) {
      /* assert.equal(null, err) */
      if (err) throw err
      console.log('item inserted')
      client.close()
    })
  })
  res.redirect('/tourPlans.html')
})



app.post('/update', urlencodedParser, function (req, res, next) {
  var item = {
    /* firstSign: req.body.firstSign,
    lastSign: req.body.lastSign,
    emailSign: req.body.emailSign,
    passSign: req.body.passSign */
    passSign: req.body.passSign

    /* feedback: 'test',
    test: 'testRout' */

  }

  var set =
    req.body.emailSign

  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err
    var db = client.db('btt')
    db.collection('login').updateOne({
      "email": set
    }, {
      $set: item
    }, function (err, result) {
      /* assert.equal(null, err) */
      console.log(set)
      console.log(item)
      if (err) throw err
      console.log('item inserted')
      client.close()
    })
  })
  res.redirect('/login.html')
})

app.post('/delete', function (req, res, next) {})

app.listen(3000, function () {
  console.log('Running on port 3000')
})