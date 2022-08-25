import React from "react";
import { useEffect, useState } from "react";
import './Card.css'

function Card(props) {
  const [name, updateName] = useState(props.name)

  useEffect(() => {
    console.log(name);
  })

  function changeName() {
    updateName(name.toUpperCase())
  }

  return (
    <div onClick = {changeName}>
      <div className ="card">
        <div className ="card__image">
          <img className ="card__image-background"
            src = {props.background} alt = {props.name}
          />
          <img className ="card__image-icon"
            src={props.icon} alt={props.name}
          />
        </div>
        <div className = "card__description">
          <h3>{props.name} </h3>
          <p>Total Quizzes: {props.totalQuizzes}</p>
          <p>Users: {props.users}</p>
          <button><a href="https://es.larnu.com/">Go to learnU</a></button>
        </div>
      </div> 
    </div>
  );

}

export default Card;