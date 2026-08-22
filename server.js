import express from "express"

const app = express()
const PORT = 8000

app.get("/",(req,res)=>{
  res.send("The serrver started")
})

app.listen(PORT,()=>{
  console.log(`the server is running on port ${PORT}`);
})