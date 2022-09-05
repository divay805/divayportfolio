import React from "react";
import CardHeading from "./CardHeading"
import CardContent from "./CardContent";
function Card2(props){
    const style={
    
        marginLeft:`${props.marginleft}`,
        marginTop:`${props.marginTop}`,
        display:"flex",
        justiyContent:"center",
        alignContent:"center",
        flexDirection:"row"

    }
    return(
        <div className="page2box" style={style}>
<div className="iconbox">
<div className="icon">
<img src={props.url}></img>
<CardContent
size={props.cardcontentsize}
    text={props.cardcontent}
    align={props.contentalign}
    margin={props.margin}

 />
</div>
<CardHeading 
    size={props.cardHeadingSize}
    text={props.cardHeading}
    align={props.headingalign}
/>


</div>


   

</div>


    )

}
export default Card2;