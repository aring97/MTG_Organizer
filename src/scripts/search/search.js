import React,{useContext, useRef} from "react"
import { cardsOwnedContext } from "../providers/cardsOwnedProvider"
import {MTGContext} from "../providers/MTGAPIProvider"
import {SearchCard} from "./searchCard"

export const CardSearch=(props)=>{
    const {cards,getCards}=useContext(MTGContext)
    const {GetCardsOwned}=useContext(cardsOwnedContext)
    const newCardSearch=useRef(null)
    return (
        <>
        <h1 className="title">search Cards</h1>
        
        <input ref={newCardSearch}
        type="text" 
        className="search__input"
        placeholder=""/>
        
        <button type="submit"
        onClick={event=>{
            event.preventDefault()
            const cardName=newCardSearch.current.value
            const card={
                "name":cardName
            }
            getCards(card)
        }}>submit</button>
        <div className="cards">
            {
                cards.map(card=>{
                    if(card.imageUrl===undefined){
                        card.imageUrl="https://www.tcdb.com/Images/Cards/Gaming/104945/104945-7275963RepBk.jpg"
                    }
                    return<SearchCard key={card.id} card={card} {...props}/>
            })
            }
        </div>
        </>
    )
}