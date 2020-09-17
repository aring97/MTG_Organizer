import React, {useState, useEffect} from "react"

export const cardsOwnedContext=React.createContext()

export const CardsOwnedProvider=(props)=>{
    const [cards, setCards]=useState([])

    const getCardsOwned=userId=>{
        return fetch(`http://localhost:8088/cardsOwned`)
        .then(res=>res.json())
        .then(setCards)
    }
    useEffect(()=>{
        getCardsOwned()
    },[])

    return(
        <cardsOwnedContext.Provider value={{
            cards
        }}>
            {props.children}
        </cardsOwnedContext.Provider>
    )
}