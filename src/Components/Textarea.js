import { useState } from "react"

export default function Textarea(props) {
    const handleupclick=()=>{
    //   console.log("you have click the change button"+text);
      let newtext=text.toUpperCase();
      setText(newtext);
      document.title= "TextUtil-uppercase";
    }
    const handleloclick=()=>{
        //   console.log("you have click the change button"+text);
          let newtext=text.toLowerCase();
          setText(newtext);
          document.title= "TextUtil-lowercase";

        }
    const handleonchange=(event)=>{
        // console.log("you have change");
        setText(event.target.value);

    }
    const handleclearclick=()=>{
      setText("");
      document.title= "TextUtil-textclear";

    }
    const handlecopy=()=>{
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.title= "TextUtil-copytext";

    }
    // const handleextraspace=()=>{
    //   let newText= text.split(/[]+/);
    //   setText(newText.join(" "))
    // }
    const[text,setText]=useState("Enteclar the text here")
  return (<>

<div className="container" ss="form-floating">
<h1>{props.heading}</h1>
  <textarea className="form-control"  value={text}  onChange={handleonchange} placeholder="Leave a comment here" id="mybox" rows="8"></textarea><br />
  <button className="btn btn-outline-success mx-1" onClick={handleupclick}>Convert to Upercase</button>
  <button className="btn btn-outline-success mx-1" onClick={handleloclick}>Convert to lowercase</button>
  <button className="btn btn-outline-danger mx-1" onClick={handleclearclick}>Clear Text</button>
  <button className="btn btn-outline-primary mx-1" onClick={handlecopy}>copy Text</button>
{/* <button className=" btn btn-primary mx-1" onClick={handleextraspace}>Remove extra space</button> */}

</div>
  <div className="container my-4" >
    <h1>Your Text Summary is here</h1>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008*text.split("").length}  min to read</p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
</>
  )
}
