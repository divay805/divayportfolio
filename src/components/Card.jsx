import React from "react";
import CardHeading from "./CardHeading"
import CardContent from "./CardContent";
function Card(props){
    const style={
        width:`${props.size}`,
        marginLeft:`${props.marginleft}`,
        marginTop:`${props.marginTop}`
    }
    return(
        <div className="cardpg1"style={style}>

<CardHeading 
    size={props.cardHeadingSize}
    text={props.cardHeading}
    align={props.headingalign}
/>
<CardContent
size={props.cardcontentsize}
    text={props.cardcontent}
    align={props.cotentalign}
    />
</div>


    )

}
export default Card;