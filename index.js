const express = require('express')
const app = express();

//ROTAS
    app.get('/',(req, res)=>{
        res.send('...')
    })


//CONFIG
    //SERVER
        app.listen(8081,(err)=>{
            if(err){
                console.log("ERROR")
            }
            else{
                console.log('OK')
            }
        })