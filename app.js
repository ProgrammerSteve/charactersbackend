const express= require('express');
const bodyParser= require('body-parser');
const mongoose=require('mongoose');// for mongodb
const Character=require('./models/characters');
const cors= require('cors');
const app=express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res, next)=> {
    Character.find().then(result=>res.send(result)).catch(err=>console.log(err));
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