import React from 'react'
function Heading(props){
const style={
color:"#000000",
fontSize:`${props.size}`,
fontFamily:"'PT Serif', serif",
textAlign:"center",
marginBottom:`${props.marginbottom}`,
marginTop:`${props.margintop}`,
transition:"text-decoration 0.1s"

}
return(
    <h1 style={style} className="heading">{props.text}</h1>
)
}
export default Heading;