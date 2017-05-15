import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cookieSession({
  name: 'session',
  keys: ["something"],
  maxAge: 24 * 60 * 60 * 1000,
  domain: '.cali.dev'
}))

const router = express.Router()
router.get('/cities', (req, res) => {

  req.session.foo = 'bar'

  const cities = [
    {name: 'New York City', population: 8175133},
    {name: 'Los Angeles',   population: 3792621},
    {name: 'Chicago',       population: 2695598}
  ]
  res.json(cities)
})
app.use(router)
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
