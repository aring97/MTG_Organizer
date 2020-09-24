import React from "react"

export const Land=(cardObj)=>{
    const card=cardObj.cardObj
    const colorIDToString=(colorArray)=>{
        const colorString=colorArray.map(color=>{
            if(color==="B"){
                return "Black"
            }
            if(color==="U"){
                return "Blue"
            }
            if(color==="G"){
                return "Green"
            }
            if(color==="W"){
                return "White"
            }
            if(color==="R"){
                return "Red"
            }
        }).join(", ")
        return colorString
    }
    return(
        <>
        <section className="layout__normal">
        <div className="left">
    <h3 className="card__name">{card.name}</h3>
    <img className="card__image__normal"src={card.imageUrl} alt={card.name}/>
        </div>
        <div className="right">
    <div className="associatedColor">Associated Colors: {colorIDToString(card.colorIdentity)}</div>
    <div className="type">Type: {card.type}</div>
    <div className="rarity">Rarity: {card.rarity}</div>
    <div className="setName">Set Name: {card.setName}</div>
    <div className="text">{card.text}</div>
        </div>
        </section>
        </>
    )
}