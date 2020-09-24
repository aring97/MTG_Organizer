import React,{useContext}from "react"
import {Link} from "react-router-dom"
import { cardsOwnedContext } from "../providers/cardsOwnedProvider"
import "../../styles/cards/cards.css"

export const Card=(props)=>{
    const {deleteOwnedCard}=useContext(cardsOwnedContext)

    return(<>
    <div className="card">
    <div className="card__name">{props.card.name} </div>
    <Link to={`/cardDetail/${props.card.id}`}>
    <img className="MTGCard" src={props.card.imageUrl} alt={props.card.name}/>
    </Link>
    <button className="card__delete" 
    onClick={()=>{
        deleteOwnedCard(props.ownedId)
    }}>Remove From Collection</button>
        </div>
    </>)
}