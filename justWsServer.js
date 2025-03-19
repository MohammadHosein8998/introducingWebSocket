import { log } from "console";
import http, { createServer } from "http"
import WebSocket, {WebSocketServer} from "ws"


let server = http.createServer((req , res) => {
    res.end("i am connected");
});

const wss = new WebSocketServer({server});


// wss.on("headers" , (headers , req)=>{
//     console.log(headers);
// });

wss.on("connection" , (ws , req) =>{
    ws.send("hello this server >>>>> rainman again !!!");
    ws.on("message", (data, isBinary )=>{
        log(data.toString());

    });
});

server.listen(8000);
