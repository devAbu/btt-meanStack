var express = require('express')
var mongoClient = require('mongodb').MongoClient
var objectId = require('mongodb').ObjectID
var bodyParser = require('body-parser')
var http = require('http')
var url = require('url')
/* var assert = require('assert') 
var objectId = require('mongodb').ObjectID*/
/* var router = express.Router() */

/* var url = 'mongodb://localhost:27017/testdb' */

var app = express()

var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.use(express.static(__dirname + '/pages'))

/* app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('pages/index')
})
app.get('/aboutUs', function (req, res) {
  res.render('pages/aboutUs')
}); */
/* app.get('/getData', urlencodedParser, function (req, res, next) {
  var resultArray = []
  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err
    var db = client.db('btt')
    var cursor = db.collection('testTable').find()
    cursor.forEach(function (doc, err) {
      resultArray.push(doc)
      console.log('select juhu')
      if (err) throw err
      /*  assert.equal(null, err) *
},
function () {
  client.close()
  /* res.render('/tourPlans', {
    item: resultArray
  })*
})
res.redirect('/tourPlans.html')
})
}) * /

// app.set('view engine', 'html')

/* app.post('/test/submit', urlencodedParser, function (req, res, nest) {
  var test = req.body.test
  res.redirect('/loginAjax')
}) */
/* router.get('/test/:id', urlencodedParser, function (req, res, nest) {
  res.render('/test', {
    output: req.params.id
  })
})

module.exports = router */

app.get('/test.html', urlencodedParser, function (req, res) {
  console.log('Getting data')

  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err

    var db = client.db('btt')

    db.collection.find({}, function (err, result) {
      if (!err) {
        res.send(result)
      } else
        throw err
    })
  })
})

app.post('/login', urlencodedParser, function (req, res, next) {
  var item = {
    emailLog: req.body.emailLog,
    passLog: req.body.passLog
  }

  var findMail = req.body.emailLog
  var findPass = req.body.passLog

  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err

    var db = client.db('btt')

    /* db.collection('register').insertOne(item, function (err, result) {
      //assert.equal(null, err)
     if (err) throw err
     console.log('item inserted')
     client.close()
    })  */

    db.collection('login').find({
      email: findMail
    }).toArray(function (err, result) {
      if (err) {
        throw err
      }
      console.log(result)
      if (result.length == 0) {
        return res.redirect('/#!login')
      } else {

        // return res.redirect('/login.html')

        // console.log(result[].emailLog)
        // console.log('item inserted')
        db.collection('login').find({
          passSign: findPass
        }).toArray(function (err, result) {
          if (err) {
            throw err
          } else {
            console.log(result)
          }
          if (result.length == 0) {
            return res.redirect('/#!login')
          } else {
            db.collection('register').insertOne(item, function (err, result) {
              /* assert.equal(null, err) */
              if (err) throw err
              console.log('item inserted')

              client.close()
            })
            return res.redirect('/')
          }

          // return res.redirect('/index.html')
        })
      }
    })
  })
  // res.redirect('/login.html')
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
  res.redirect('/#!feedback')
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

  var find = req.body.emailSign

  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err

    var db = client.db('btt')

    db.collection('login').find({
      email: find
    }).toArray(function (err, result) {
      if (err) {
        throw err
      } else {
        console.log(result)
      }
      if (result.length > 0) {
        return res.redirect('/#!register')
      } else {
        db.collection('login').insertOne(item, function (err, result) {
          /* assert.equal(null, err) */
          if (err) throw err
          console.log('item inserted')
          client.close()
        })
        return res.redirect('/')
      }
    })
  })
  // res.redirect('/index.html')
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
    price: req.body.price,

    /* feedback: 'test',
    test: 'testRout' */
  }

  mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err
    /* if (igman == null && mostar == null && jajce == null && konjic == null && bjelasnica == null && trebevic == null && sarajevo == null && jahorina == null) {
      res.redirect('/#!makeTour');
    } else if (length == 0 || people == 0) {
      res.redirect('/#!makeTour')
    } */

    var db = client.db('btt')
    db.collection('requestTour').insertOne(item, function (err, result) {
      /* assert.equal(null, err) */
      if (err) throw err
      console.log('item inserted')
      client.close()
    })
  })
  res.redirect('/#!tourPlans')
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
    console.log(response)
    var response = req.body.check
    db.collection('login').find({
      email: set
    }).toArray(function (err, result) {
      if (err)
        throw err
      console.log(result)
      if (result.length == 0) {
        res.set({
          success: false,
          message: 'fail',
          // token: token
        })
        return res.redirect('/#!forgot')
      } else {
        db.collection('login').updateOne({
          'email': set
        }, {
          $set: item
        }, function (err, result) {
          /* assert.equal(null, err) */
          console.log(set)
          console.log(item)
          if (err) throw err
          if (result) {
            console.log('pass changed')
            res.set({
              success: true,
              message: 'good',
              // token: token
            })
            return res.redirect('/#!login')
          }
          client.close()
        })
      }
    })
  })
  // res.redirect('/login.html')
})

app.post('/delete', function (req, res, next) {})

app.listen(3000, function () {
  console.log('Running on port 3000')
})