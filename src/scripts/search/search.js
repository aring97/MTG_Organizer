import React,{useContext, useRef} from "react"
import {MTGContext} from "../providers/MTGAPIProvider"
import {Card} from "../mycards/MyCards"

export const CardSearch=(props)=>{
    const {cards,getCards}=useContext(MTGContext)
    const newCardSearch=useRef(null)
    return (
        <>
        <h1>search Cards</h1>
        
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
                    return<Card key={card.id} card={card}/>
            })
            }
        </div>
        </>
    )
}