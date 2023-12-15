const http = require("http")
const app = require("./app")
const mongoose = require("mongoose")
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server,{cors:{origin: "*"}});

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on("userAuth",msg => {
        socket.broadcast.emit("userAuth", msg)
    })
});

const dbUrl = "mongodb+srv://larvish:larvish007@chat.jwmup1j.mongodb.net/chatApp?retryWrites=true&w=majority"
mongoose.connect(dbUrl)
.then(
    server.listen(3000,() => {
        console.log("App is running")
    })
)
.catch(err => {
    console.log(err)
})


