const bodyParser = require('body-parser'),
      express = require('express'),
      app = express()
      PORT = process.env.PORT || 8080;

 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted: hello world\n')
//   res.end(JSON.stringify(req.body, null, 2))
//})
app.get("/", function(req, res) {
    res.send("Welcome to the Resturant!");
  })
  
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})
