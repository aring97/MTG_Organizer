import React, {useState, useEffect} from "react"

export const cardsOwnedContext=React.createContext()

export const CardsOwnedProvider=(props)=>{
    const [cards, setColors]=useState([])

    const GetCardsOwned=()=>{
        return fetch(`http://localhost:8088/cardsOwned`)
        .then(res=>res.json())
        .then(setColors)
    }
    const addToCardsOwned=(cardObject)=>{
        return (fetch(`http://localhost:8088/cardsOwned`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(cardObject)
        })
        .then(GetCardsOwned)
        .then(console.log(cards))
        )
        }

    const deleteOwnedCard=cardOwnedId=>{
        return fetch(`http://localhost:8088/cardsOwned/${cardOwnedId}`, {
            method:"DELETE"
        })
        .then(GetCardsOwned)
    }
    useEffect(()=>{
        GetCardsOwned()
    },[])
    return(
        <cardsOwnedContext.Provider value={{
            cards,GetCardsOwned, addToCardsOwned, deleteOwnedCard
        }}>
            {props.children}
        </cardsOwnedContext.Provider>
    )
}