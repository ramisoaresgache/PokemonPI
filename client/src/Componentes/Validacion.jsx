export default function Validate(input){
//  const {name,image,hp,attack,defense,speed,height,width} = props;
  const err ={}
 const validateName = (input)=>{
  {input.name.length >0 && input.name.match(/[0-9]/) ? true : false;}
 }
 const validateHp = (input)=>{
   {input.hp.length > 0 && input.hp.match(/^[0-9]+$/) ? true : false;}
  }
  const validateAttack = (input)=>{
  {input.attack.length > 0 && input.attack.match(/^[0-9]+$/) ? true : false;}
 }
 const validateDefense = (input)=>{
   {input.defense.length > 0 && input.defense.match(/^[0-9]+$/) ? true : false;}
  }
  const validateSpeed = (input)=>{
    {input.speed.length > 0 && input.speed.match(/^[0-9]+$/) ? true : false;}
  }
  const validateHeight = (input) =>{
    {input.height.length > 0 && input.height.match(/^[0-9]+$/) ? true : false;}
  }
  const validateWidth = (input) =>{
    {input.width.length > 0 && input.width.match(/^[0-9]+$/) ? true : false;}
  }
  const validateImage = (input)=>{
   {input.image.length > 0 && input.image.match(/^(https?:\/\/)/)) ? true : false;} 
  }
  return err
}







