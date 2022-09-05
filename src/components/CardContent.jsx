import React from "react";

function CardContent(props){
    const style={
        fontSize:`${(window.innerWidth>650)?(props.size):(props.size)/5}`,
        fontFamily: "'Oswald', sans-serif",
        fontWeight:"300",
        color: "#000000",
        textAlign:`${props.align}`,
        margin:`${props.margin}`
    
    }
    return(
        <p style={style}>
           { props.text}
        </p>
    )
}
export default CardContent;