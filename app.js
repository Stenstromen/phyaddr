const express = require("express");
const bodyParser = require("body-parser");

const compression = require("compression");
const ejs = require("ejs");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

const phyaddrRouter = require("./routers/phyaddr.router");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(phyaddrRouter);

io.on("connection", function (socket) {
  console.log("A user connected");

  socket.on("join_room", (data) => {
    console.log(socket.id + " joined " + data)
    socket.join(data)
  })

  socket.on("location", (data) => {
    let locationpacket = {
        latitude: data.latitude,
        longitude: data.longitude,
    }
    socket.to(data.room).emit("location", locationpacket)
  })

  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

http.listen(8080, () => {
  console.log("Server listening on localhost:8080");
});
