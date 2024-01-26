const express = require('express')
const app = express()


//Routes Start
app.get('/', (req,res) => {
    res.send('Hello world')
})

//Routes End
app.listen(3000, () => {
    console.log("Test application")
})