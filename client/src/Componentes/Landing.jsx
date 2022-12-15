import React from 'react';
import { Link } from 'react-router-dom';
import NewTwo from '../Imagen/pika.gif';
import css from '../Style/LandingPage.module.css'


export default function Landing(){
  return(
    <div className=''>
       <h1> martin gato</h1>
      <input className= {css.image} type = "image" src={NewTwo} alt ='NewTwo' ></input>
      <Link to = {'/home'}>
      <button className='boton'>Enter</button>
      </Link>
    </div> 
  )
}
