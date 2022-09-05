import React from "react";

function CardHeading(props){
    const style={
        color:"#BCBCBC",
        fontSize:`${props.size}`,
        fontFamily:"'PT Serif', serif",
        textAlign:`${props.align}`
        
    }
    return(<p style={style}>{props.text}</p>)
}
export default CardHeading;