import React from "react";


export default function Card({ id, name, image, types }) {
  return (
    <div key={id}>
      <div>
        <div className='title'>
          <h3>{name}</h3>
        </div>
        <div className='image'>
          <img src={image} alt={name} width='200px' height='250px' />
        </div>
        <div>
          {types.map((e, i)=>{
           return (<h3 key = {i}> {e.name}</h3>)
          })}
        </div>
      </div>
    </div>
  );
}
