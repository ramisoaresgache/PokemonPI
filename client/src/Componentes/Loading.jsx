import React from "react";
import gif from "../Imagen/pokemon-pokeball.gif"


const  Loading = () =>{
  return(
    <div>
      <img className="img" src={gif} alt = "gif"/>
    </div>
  )
}
 export default Loading;
