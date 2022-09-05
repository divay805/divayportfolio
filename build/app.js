
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
var postmark = require("postmark");


var client = new postmark.ServerClient("824ba82e-bf13-4996-95c4-67e111fdc75a");


const contactForm = (name, msg, replyEmail) => {
    client.sendEmail({
        "From":`<${replyEmail}>`,
        "To": "<divay805@gmail.com>",
        "Subject": "Email from " + replyEmail,
        "TextBody": "Name: " + name + "\n" + msg,
        "MessageStream": "outbound"
      });
}

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
console.log(__dirname);


app.get("/",function(req,res){
    res.sendFile(__dirname+"\index.html")
    
})

app.post("/",function(req,res){
    const namee=req.body.name;
    const emaill=req.body.email
    const msgg=req.body.msg;
contactForm(namee,emaill,msgg)
})


// sorry i am not able to do connect the contact me facilty because it is my first project and i am not familier with how to integrate node with the react ui 4
// but i try to code that is above but that is not working 