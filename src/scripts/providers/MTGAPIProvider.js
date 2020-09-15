import React, {useState, useEffect} from "react"

export const MTGContext=React.createContext()

export const MTGProvider=(props)=>{
    const mtg=require('mtgsdk')
    const [cards, setCards]=useState([])
    const getCards=()=>{
        mtg.card.where({name:"Black Lotus"})
        .then(card=>{
            console.log(card)
        })
    }
    useEffect(()=>{
        console.log(cards)
        getCards()
    },[])

    return (
        <MTGContext.Provider value={{
            cards
        }}>
            {props.children}
        </MTGContext.Provider>
    )
}