import React, {useState} from "react"

export const MTGContext=React.createContext()

export const MTGProvider=(props)=>{
    const mtg=require('mtgsdk')
    const [cards, setCards]=useState([])
    const getCards=(cardObj)=>{
        mtg.card.where(cardObj)
        .then(setCards)
        .then(()=>{console.log(cards)})
    }

    return (
        <MTGContext.Provider value={{
            cards,getCards
        }}>
            {props.children}
        </MTGContext.Provider>
    )
}