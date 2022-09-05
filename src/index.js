
import React from 'react';

import ReactDOM from 'react-dom';

import App from "./components/App";
import {contactForm} from "./app"

ReactDOM.render(<App />,document.getElementById("root"))
const twitter=document.getElementById("twitter")
const facebook=document.getElementById("facebook")
const github=document.getElementById("github")

const navitems=document.querySelectorAll(".navbar li p");
const page3=document.querySelector(".page2")
const form=document.querySelector(".form");
navitems[0].addEventListener("click",()=>{
    console.log("i am clicked");
    const toScroll=page3.offsetTop;
    window.scrollTo(0,toScroll-toScroll/2.5)
})
navitems[1].addEventListener("click",()=>{
    console.log("i am clicked");
    window.scrollTo(0 ,form[0].offsetTop)
})



const sendButton=document.querySelector("#button")
twitter.addEventListener("click",()=>{window.location.href = 'https://twitter.com/aggarwal_divay';})
facebook.addEventListener("click",()=>{window.location.href = 'https://www.instagram.com/divay6677/';})
github.addEventListener("click",()=>{window.location.href = 'https://github.com/divay805';})


//////////

sendButton.addEventListener("click", async ()=>{
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const msg = document.getElementById("message").value
    await contactForm(name, msg, email);
    console.log("mail is sent", name, email, msg);
})



