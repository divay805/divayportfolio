import React from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
function innerCardpg3(props){


return(
    <div>
<CardContent
text={props.CardContent}
align="Left"
size="10px"
margin="2px"

 />
<CardHeading
align="Left"
text={props.CardHeading}
size="3px"
 />
    </div>
)


}
export default innerCardpg3;