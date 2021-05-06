const express =require("express")
const path=require("path")
const hbs=require('hbs')
const app=express()
const port=process.env.PORT||3000
console.log(path.join(__dirname,"../templates"));

app.use(express.static(path.join(__dirname,"../public")))
hbs.registerPartials(path.join(__dirname,"../templates/partials"))

app.set('view engine','hbs')

app.set('views',path.join(__dirname,"../templates/views"))

app.get('/',(req,res)=>{

     res.render('index')
})

app.get('/about',(req,res)=>{

    res.render('about',{

        errorMsg:"404 PAGE NOT FOUND"
    })

})

app.get('/weather',(req,res)=>{

    res.render('weather')
})

app.get('*',(req,res)=>{

    res.render('error')
})

app.listen(port,()=>
{
    console.log(`the port is running at ${port}`);
}
)










