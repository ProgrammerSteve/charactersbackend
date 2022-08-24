const express= require('express');
const bodyParser= require('body-parser');
const mongoose=require('mongoose');
const HSK1=require('./models/hsk1');
const HSK2=require('./models/hsk2');
const cors= require('cors');
const app=express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res, next)=> {
    HSK1.find().then(result=>res.send(result)).catch(err=>console.log(err));
});

app.get('/hsk2', (req, res, next)=> {
    HSK2.find().then(result=>res.send(result)).catch(err=>console.log(err));
});




const port = process.env.PORT || 3000
mongoose
    .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fmqlalh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    )
    .then(()=>{
        console.log('connected to mongodb...')
        console.log(`listening to port: ${port}`)
        app.listen(port);
    })
    .catch(err=>console.log(`Could not connect to mongo DB:`, err))