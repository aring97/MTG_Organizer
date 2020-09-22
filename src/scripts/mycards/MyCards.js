import React,{useContext}from "react"
import { cardsOwnedContext } from "../providers/cardsOwnedProvider"
export const Card=(props)=>{
    const {deleteOwnedCard}=useContext(cardsOwnedContext)

    return(<>
    <div className="card">
    <div className="card__name">{props.card.name} </div>
    <img className="MTGCard" src={props.card.imageUrl} alt={props.card.name}/>
    <button className="card__delete" 
    onClick={()=>{deleteOwnedCard(props.ownedId)}}>Delete</button>
        </div>
    </>)
}