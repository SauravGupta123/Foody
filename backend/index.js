const express = require('express')
const app = express();
const connectMongoose= require('./db.js')
const bodyParser = require('body-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json());

const router=express.Router();

router.use(auth,auth2);

//stores foodData here
 connectMongoose();

router.get('/users', (req, res) => {
  console.log("get called!");

})


app.get('/users',(req,res)=>{
  console.log('get request called');
})

app.get('/verify/users',(req,res,next)=>{
  console.log('verify get request called');
  next();
})




function auth(req,res,next){
  console.log("autjhenticated");
  next();
}

function auth2(req,res,next){
  console.log("autjhenticated2");
  next();
}

app.use('/api/', require('./routes/createUser.js'));

app.listen(3000,()=>{
    console.log("server is runnning at port 3000");


})