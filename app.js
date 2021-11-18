const express=require('express');
const app=express();
const port=5000;
const user=require('./user.json')
app.use(express.json());
app.get('/',(req,res)=>{
    res.send({user});
})

app.post('/',(req,res)=>{
    
    res.send([...user,req.body]);
})


app.patch('/:email',(req,res)=>{
   const newUser=user.map((e)=>{
       if(req.params.email===e.email){
           return req.body;
       }
       return user;
   })
   res.send(newUser);
})

app.delete('/:email',(req,res)=>{
    const newUser=user.filter((e)=>e.email !==req.params.email);
    res.send(newUser);
})

app.get('/:email',(req,res)=>{
    const newUser=user.filter((e)=>e.email ===req.params.email);
    res.send(newUser);
})

app.listen(port,()=>{
    console.log(`running on port ${port}`);
})