

const express=require('express')
server=express();
//
const cors=require('cors');
server.use(cors())
//
server.use(express.json())
//
const bcrypt=require('bcrypt');


// imp

//
const mongoose= require('mongoose');
const JP='mongodb+srv://jagapaladugu143:$dh2WAsfkpAnz$r@cluster0.8u33wjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
require('dotenv').config(); // err on connect env
mongoose.connect(JP)
db=mongoose.connection;

db.once('open',()=>{
    console.log('db connected...')
})
db.on('error',(error)=>{
    console.log(error)
})
const Tuser=require('./Componentes/user')
server.get('/',(req,res)=>{
    
res.json('get data')
})

server.post('/newuser' ,(req,res)=>{
    //Tuser.create(req.body); or
    const {name,email,password}=req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        Tuser.create({name,email,password:hash})
        .then(user=>res.json(user))
        .catch(err=>console.log(err))
    }).catch(err=>{console.log(err)})
      
});

server.post('/login',async (req,res)=>{
const {email,password}=req.body;
await Tuser.findOne({email})
.then(user=>{
    if(user){
        bcrypt.compare(password,user.password,async(err,resp)=>{
           
            if(resp){
               res.json("success")
            }else {  res.json("password mismatch")}
        })
        
      
}else(res.json("user not found"))
})
})
/*.then(user=>{
    
    if(user){
        bcrypt.compare(password,user.password),
         async (err,resp)=>{
if(resp){
res.json(message='success')
}else {res.json('password mismatch')}
        }
    }else(res.json('user not found'))
})
});*/

 port=2000;
server.listen(port ,()=>{console.log(`server connected on ${port}` )})