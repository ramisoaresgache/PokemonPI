import React from 'react';
import NewTwo from '../Imagen/Punch.jpg';
import css from '../Style/LandingPage.module.css'

export default function Landing(){
  return(
    <div className=''>
       <h1> martin gato</h1>
      <input className= {css.image} type = "image" src={NewTwo} alt ='NewTwo' ></input>
    </div>
  )
}
