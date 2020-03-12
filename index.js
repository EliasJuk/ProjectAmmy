const express = require('express')
const app = express();

// View Engine
    app.set('view engine','ejs')
    app.use(express.static('public'))

//ROTAS
    app.get('/',(req, res)=>{
        res.render('index')
    })

    app.get('/sobre',(req,res)=>{
        res.render('sobre')
    })

    app.get('/signup',(req,res)=>{
        res.render('signup')
    })


//CONFIG
    //SERVER
        app.listen(8081,(err)=>{
            if(err){
                console.log("ERROR",err)
            }
            else{
                console.log('OK')
            }
        })