// const express = require("express")
// const app = express()
// const path = require("path")
// const port = 3200

// app.use(express.static(path.join(__dirname, "public")))

// app.get("/", (req, res) => {
//   res.send(sendFile(path.join(__dirname, "public/")))
//   // res.send(express.static(path.join(__dirname, "index.html")))
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
////first

var express = require("express")
var app = express()

// set the view engine to ejs
app.set("view engine", "ejs")

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index")
})

// about page
app.get("/about", function (req, res) {
  res.render("pages/about")
})
app.use(express.json())
app.post("/hi", (req, res) => {
  const { name } = req.body

  res.send(`Welcome ${name}`)
})

app.listen(8080)
console.log("Server is listening on port 8080")
