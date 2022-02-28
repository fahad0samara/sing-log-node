
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fahad:00000@cluster0.qxnsg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log('connection ');
}).catch(err => console.log(err));
const mongodb=new mongoose.Schema({
    user: { type: String},
    password: { type: String,required: true}},
    
    
  {timestamps: true}
    )
module.exports=mongoose.model("mongodb",mongodb)