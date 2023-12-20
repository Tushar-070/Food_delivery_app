const express = require('express')
const app = express()
const CreateUser=require('./Routes/CreateUser')
const DisplayData=require('./Routes/DisplayData')


const port = 5000
const connectToMongo=require('./db')
connectToMongo()

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/foodData', (req, res) => {
  res.send(global.food_items)
})

app.use(express.json())
app.use('/api',CreateUser,DisplayData)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})