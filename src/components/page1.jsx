import React from "react";
import Header from "./Header"
import Heading from './Heading';
import Card from "./Card"
import {la,lb} from "../page1-content"

function CreateCard1(card){
    return(<Card 
        size="16vw"
        cardHeadingSize="1vw"
        cardHeading={card.heading}
        cardcontentsize="1.4vw"
        cardcontent={card.content}
    
      /> )
    }

    function CreateCard2(card){
        return(<Card 
             size="15vw"
        cardHeadingSize="1vw"
        cardHeading={card.heading}
        cardcontentsize="2.6vw"
        cardcontent={card.content}
        
          /> )
        }
function Page1(){

return(
    <div>
<Header />
      <Heading
      size="2.1vw"
      text={`Divay Garg`}
      margintop="3vw"
      marginbottom="1px"
       />
      <Heading
      size="2.1vw"
      text={`UI/UX Intraction Desingner`}
      margintop="1px"
      marginbottom="1px"
       />
      <Heading
      size="2.1vw"
      text={`Based in INDIA`}
      margintop="1px"
      marginbottom="4vw"
       />
<div className='body'>
<div className='l1'>
{/* <Card 
         size="15vw"
         cardHeadingSize="13px"
         cardHeading="Biography"
         cardcontentsize="105%"
         cardcontent="Hello I am brunu edison i work for money as ui and ux design "

       /> 
<Card 
         size="15vw"
         cardHeadingSize="13px"
         cardHeading="Biography"
         cardcontentsize="105%"
         cardcontent="Hello I am brunu edison i work for money as ui and ux design "
      headingaling="right"

       /> 
<Card 
         size="15vw"
         cardHeadingSize="13px"
         cardHeading="Biography"
         cardcontentsize="105%"
         cardcontent="Hello I am brunu edison i work for money as ui and ux design "

       />  */}

{la.map(CreateCard1)}
</div>
<div className='l4'>
<div className='l2'>
<div>
  <Heading 
    text="Image"
    size="2.3vw"
  />
</div>
</div>

</div>
<div className='l3'>
{/* <Card 
         size="15vw"
         cardHeadingSize="13px"
         cardHeading="Nubmer"
         cardcontentsize="190%"
         cardcontent="150"

       /> 
<Card 
         size="15vw"
         cardHeadingSize="13px"
         cardHeading="Nubmer"
         cardcontentsize="190%"
         cardcontent="150"

       /> 
<Card 
         size="15vw"
         cardHeadingSize="13px"
         cardHeading="Nubmer"
         cardcontentsize="190%"
         cardcontent="150"
      // headingalign="Right"
      // cotentalign="Right"

       />  */}

       {lb.map(CreateCard2)}

</div>

</div>




    </div>
)
}
export default Page1;