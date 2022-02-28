const express = require('express');
const router = express.Router();
const mongoose = require('../mongo');
const bcrypt = require('bcrypt');

router.get('/',async(req, res, next)=>{
    try{
const data = await mongoose.find({})
res.send(data)

    }catch(err){
        next(err);
    }
});

router.post('/',async(req, res, next)=>{
    try{
        const userfind = await mongoose.findOne({user:req.body.user})
        if(userfind)return res.status(400).send('user already exists')
        const salt = await bcrypt.genSalt(10)
        const hasha =await bcrypt.hash(req.body.password,salt)
const data = new mongoose({password:hasha,user:req.body.user})   

// here you should use save() not sava()
const savadata= await data.save()
res.json(savadata)
console.log(savadata);

    }catch(err){next(err)}
})

module.exports = router;