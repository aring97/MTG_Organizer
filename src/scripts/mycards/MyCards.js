import React from "react"

export const Card=({card}, props)=>(
    <>
    <div className="card">
    <div className="card__name">{card.name} </div>
    <img className="MTGCard" src={card.imageUrl} alt={card.name}/>
    <button className="card__delete" 
    onClick={event=>{
        console.log(props)
        }}>delete</button>
        </div>
    </>
)