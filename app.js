const   express=require("express")
const  bodyParser=require("body-parser")
const  LoginRouter=require("./routes/login.js")

var  server=express();
server.listen(3000);
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({
extended:false
}));
server.use("/login",LoginRouter)
