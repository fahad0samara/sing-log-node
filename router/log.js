const express = require('express');
const router = express.Router();
const mongoose = require('../mongo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.get('/',async(req, res, next)=>{
    try{
        const data = await mongoose.find({})
        res.send(data)
    }catch(err){
        next(err);
    }
});
router.post('/' ,async(req, res, next)=>{
try{

const datauser = await mongoose.findOne({user:req.body.user})
if(!datauser)return res.status(400).send('user not found')

const amberdata = await bcrypt.compare(req.body.password,datauser.password)
if(!amberdata)return res.status(400).send('password mismatch')
// here you should use this because you have a problem
// res.send('user login successful')
const token = jwt.sign({_id:datauser._id},"tokenscrit")
res.header('Content', token)
.send(token)

}catch(err){
    next(err);
}
})


module.exports = router;