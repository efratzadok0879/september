const express=require('express');

const app=express();

app.use(express.static('./view'));

app.get('/test',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname+'/view/index.html');
})

app.listen(4000);