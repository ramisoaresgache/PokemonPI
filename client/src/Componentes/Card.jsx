import React from "react";
import s from "../Style/Card.module.css"


export default function Card({ id, name, image, types }) {
  return (
    <div key={id}>
      <div className={s.container}>
        <div className={s.title}>
          <h3>{name}</h3>
        </div>
        <div className={s.image}>
          <img src={image} alt={name} width='200px' height='250px' />
        </div>
        <div className={s.type}>
          {types.map((e, i)=>{
           return (<h3 key = {i}> {e.name}</h3>)
          })}
        </div>
      </div>
    </div>
  );
}
