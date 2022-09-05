import React from "react"
import Heading from "./Heading"
import Card2 from "./Card2"
import content from "../page2-content"

// {
//     id:1,
//     content:"",
//     imageurl:"./images/html.jpg",
//     iconHeading:""
        
//         },

function createicon(card){
    return(
<Card2

url={card.imageurl}
cardcontent={card.content}
cardHeading={card.iconHeading}
contentalign="center"
cardcontentsize="1vw"
margin="0px"
headingalign="center"
cardHeadingSize="1vw"
 />
    )
}

function Page2(props){
return(
<div className="page2">
<Heading
    size="2.2vw"
    text="My Advantages"
    margintop="3vw"
    marginbottom="3vw"
    
     />
    
<div className="page2body">
{/* <Card2
url="./images/html.jpg"
cardcontent="78"
cardHeading="Html"
contentalign="center"
cardcontentsize="30px"
margin="0px"
headingalign="center"
 />
<Card2
url="./images/html.jpg"
cardcontent="78"
cardHeading="Html"
contentalign="center"
cardcontentsize="30px"
margin="0px"
headingalign="center"
 />
<Card2
url="./images/html.jpg"
cardcontent="78"
cardHeading="Html"
contentalign="center"
cardcontentsize="30px"
margin="0px"
headingalign="center"
 />
<Card2
url="./images/html.jpg"
cardcontent="78"
cardHeading="Html"
contentalign="center"
cardcontentsize="30px"
margin="0px"
headingalign="center"
 />
<Card2
url="./images/html.jpg"
cardcontent="78"
cardHeading="Html"
contentalign="center"
cardcontentsize="30px"
margin="0px"
headingalign="center"
 />
<Card2
url="./images/html.jpg"
cardcontent="78"
cardHeading="Html"
contentalign="center"
cardcontentsize="30px"
margin="0px"
headingalign="center"
 /> */}

{content.map(createicon)}


</div>
</div>
)
}
export default Page2;