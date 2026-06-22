const express = require("express");
app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
async function main(){
   mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(() =>{
    console.log('Connected sucessfull !')
})
.catch((err)=> console.log(err));

/*
let Chat1 = new Chat({
    from : "Sandeep",
    to : "Kumar",
    //* message is not store in dataBase because it's not define in the schema.
    message : "this is not in schema ",

    msg : "Thsi is the testing message",
    created_at : new Date()
});  */

// Chat1.save().then((res)=>{
//     console.log(res);
// });

app.get("/chats",async(req,res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    
    res.render("index.ejs",{chats});
});

app.post("/chats",(req, res)=>{
    let {from , to , msg} = req.body;
    let newChat = new Chat({
        from : from,
        to : to ,
        msg : msg,
        created_at : new Date(),
    });
    console.log(newChat);
    newChat.save().then((res)=>{
        console.log("Chat was Saved");
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats")
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//* Edit Rouute
app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//* Update Route
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {msg : newMsg}=req.body;
    console.log(newMsg);
    let updateChat= await Chat.findByIdAndUpdate(id,{msg : newMsg}, { runValidators: true, new: true });
    console.log(updateChat);
    res.redirect("/chats");
});

//* Destroy Route 
app.delete("/chats/:id",async(req,res)=>{
    let {id}= req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log("deleteChat");
    res.redirect("/chats");
})

app.get("/", (req,res)=>{
    res.send("Root is Working");
})

app.listen(8080,()=>{
    console.log(`server is listing on the port 8080`);
})
