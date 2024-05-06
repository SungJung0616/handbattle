import React from 'react'

const Box = (props) => {
    let result;
    if (
      props.title === "Computer" &&
      props.result !== "tie" &&
      props.result !== ""
    ) { 
      result = props.result === "win" ? "lose" : "win";
    } else {
      result = props.result;
    }

    
  return (
    <div className={`box ${result}`}> 
      <h2>{props.title}</h2>
       <img src={props.item && props.item.img} alt={props.item && props.item.alt} />
      <p>{result}</p>
    </div>
  )
}

export default Box
