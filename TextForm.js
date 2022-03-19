import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        //console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const resetInputField = () => {
        setText("");
      };
    const onChangeHandler = (event)=>{
        console.log("onchange clicked");
        setText(event.target.value);
        
    }
    const [text, setText] = useState('');
    
  return (
      <>
    <div className='container'>
        <h1>{props.heading}</h1>
             
        <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
        </div>
        <div className='container'>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-2 ' onClick={handleLoClick}>
            Convert to Lowercase
        </button>
        <button onClick={resetInputField} className="btn btn-primary"> Reset </button>
        </div>
    </div>
    <div className='container my-3 mx-'>
        <h2>Your text summary </h2>
        <p><b>{text.split(" ").length} </b> words and <b> {text.length}</b> characters</p>
        <p> <b>{text.split(" ").length*0.008}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
         
    </div>
    </>
  )
}
