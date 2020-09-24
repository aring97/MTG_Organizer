import React from "react"

export const Plane=(cardObj)=>{
    const card=cardObj.cardObj
    console.log(card)
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
        <section className="layout__special">
        <div className="top">
    <img className="card__image__special"src={card.imageUrl} alt={cardObj.name}/>
        </div>
        <div className="buttom">
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