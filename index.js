const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 8080;
const io = require('socket.io')(http);

io.on("connection", socket => {
  
  socket.on("disconnect", () => {

    console.log("X desconectou: " + socket.id);

  });

  socket.on("msg", data => {
    
    io.emit("showmsg", data);

  })

});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});


http.listen(port, () => {
  console.log("Listening on port", + port);
});