import React from "react"

export const Phenom=(cardObj)=>{
    const card=cardObj.cardObj
    console.log(card)
    return(
        <>
        <section className="layout__special">
        <div className="top">
    <img className="card__image__special"src={card.imageUrl} alt={card.name}/>
        </div>
        <div className="buttom">
    <div className="type">Type: {card.type}</div>
    <div className="rarity">Rarity: {card.rarity}</div>
    <div className="setName">Set Name: {card.setName}</div>
    <div className="text">{card.text}</div>
        </div>
        </section>
        </>
    )
}