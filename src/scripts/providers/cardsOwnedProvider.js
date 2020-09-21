import React, {useState, useEffect} from "react"

export const cardsOwnedContext=React.createContext()

export const CardsOwnedProvider=(props)=>{
    const [cards, setCards]=useState([])

    const GetCardsOwned=userId=>{
        return fetch(`http://localhost:8088/cardsOwned`)
        .then(res=>res.json())
        .then(setCards)
    }
    const addToCardsOwned=(cardObject)=>{
        return fetch(`http://localhost:8088/cardsOwned`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(cardObject)
        })
        .then(GetCardsOwned)
        }

    const deleteOwnedCard=cardOwnedId=>{
        return fetch(`http://localhost:8088/cardsOwned/${cardOwnedId}`, {
            method:"DELETE"
        })
        .then(GetCardsOwned)
    }
    useEffect(()=>{
        GetCardsOwned()
    },[cards])

    return(
        <cardsOwnedContext.Provider value={{
            cards, addToCardsOwned, deleteOwnedCard
        }}>
            {props.children}
        </cardsOwnedContext.Provider>
    )
}