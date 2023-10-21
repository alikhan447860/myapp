import { useState } from "react"

export default function Textarea(props) {
    const handleupclick=()=>{
    //   console.log("you have click the change button"+text);
      let newtext=text.toUpperCase();
      setText(newtext);
    }
    const handleonchange=(event)=>{
        // console.log("you have change");
        setText(event.target.value);

    }
    const[text,setText]=useState("Enter the text here")
  return (

<div class="form-floating">
<h1>{props.heading}</h1>
  <textarea class="form-control"  value={text} onChange={handleonchange} placeholder="Leave a comment here" id="floatingTextarea" rows="8"></textarea><br />
  <button className="btn btn-primary" onClick={handleupclick}>Convert to Upercase</button>
</div>
  )
}
