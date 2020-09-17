import React from "react"

export const Card=({card})=>(
    <>
    <img className="MTGCard" src={card.imageUrl} alt={card.name}/>
    </>
)