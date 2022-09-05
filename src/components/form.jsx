import React from "react";
function Form(){
    return( <div class="container">
    <form >
      <h3> Contact Me Here..</h3>
    <input type="text" id="name" placeholder="Your Name" required>
    <input type="email" id="email" placeholder="Your Email" required>
    <input type="text" id="phone" placeholder="Phone No." required>
    <textarea name="" id="message" rows="4" placeholder="How May I help you "></textarea>
    <button type="submit">Send</button>
    </form>
  </div>)
}