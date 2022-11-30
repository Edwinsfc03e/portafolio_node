const express = require(`express`)
const path =  require ("path")
const router = require("./routes/index.js")


const app = express()
const port = 52585

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.use(`/public`,express.static(path.join(__dirname,`./public`)))
app.use(router)

app.listen(port, function() {
    console.log( `acceda al servidor http://localhost:${this.address().port.toString()}`)
})