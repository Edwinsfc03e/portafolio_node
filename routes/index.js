const express=require(`express`)
const { rename } = require("fs")
const path=require(`path`)

const app = express.Router()


app.get('/',(resq,res)=>{
    res.render(`index`,{
        title: 'inicio'
    })    
    })

app.get(`/Educacion`, (resq,res)=>{
        res.render(`Educacion`, {
            title:'mi educacion'    
        })    
        })

app.get(`/about`, (resq,res)=>{
        res.render(`about`,{
            title:'sobre mi'
        })    
        })
        

app.get(`/login`, (resq,res)=>{
         res.render(`login`,{
            title:'inicie sesion'
        })    
        })
app.use( (resq,res)=>{
    res.render('error404', {
        title: 'Error'
    })  
        
        })       
      



module.exports=app        