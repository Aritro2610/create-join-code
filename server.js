const express = require('express');
const app = express();
const PORT = 8000;
const User = require('./models/user')
const bodyParser  = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')


// parse application/json
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(cors());
///mongodb connection
mongoose.connect('mongodb://localhost/testnTrial' ,{
    useNewUrlParser: true
});
const db = mongoose.connection
db.on('error',error=> console.error(error));
db.once('open',()=> console.log('connected to MongoDB'));

app.post('/create',async(req,res)=>{
    const data = req.body;
    console.log(req.body)
    const user = await User.create(data);
    res.json({status:"ok",user});
});

app.get('/join-team',async(req,res)=>{
    const user = await User.find({userType:'createTeam'});
    res.json({status:"ok",user});
})

app.post('/join-team/:id',async(req,res)=>{
    console.log(req.params.id);
    const {username,mobNo,teamUserId} = req.body;
    try {
        const team = await User.updateOne({_id:req.params.id},{
            $push:{
                teamUserId:{$each:[{playerName:username,mobNo}]}
            }
        });
        res.json({status:"ok",team});
        // console.log(team);
    } catch (error) {
        console.log(error);
    }

})

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})