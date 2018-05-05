const bodyParser = require('body-parser'),
      express = require('express'),
      app = express()
      PORT = process.env.PORT || 8080;

 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
 

require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})
