import React from 'react';

function Header(param) { 
    return(
    <div className='navbar'>
        <ul className='navlist'>
            <li><p>WORKS</p></li>
            <li><p>CONTACTS</p></li>
        </ul>
        <div className='midicon'>
        <img src="./images/icon 1 .jpg"></img>  
        <p>DIVAY GARG</p>
        </div>
        <div className='icontray'>
     
        <img id="twitter"src="./images/icon 2 .jpg"></img>  
        <img id="github"src="./images/icon 3.jpg"></img>  
        <img id="facebook"src="./images/icon 4.jpg"></img>
         
        </div>
    </div>

    )
    }
  export default Header;