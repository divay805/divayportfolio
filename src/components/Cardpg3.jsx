import React from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
function Cardpg3(props){
const style={
    // height:"30vh",
    // width:"25vw"


}

return(
    <div style={style}>
<CardContent
text={props.CardContent}
align="Left"
size="1.5vw"
margin="2px"

 />
<CardHeading
align="Left"
text={props.CardHeading}
size="0.8vw"
 />
    </div>
)


}
export default Cardpg3;