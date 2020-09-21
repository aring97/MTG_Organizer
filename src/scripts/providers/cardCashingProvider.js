import React, {useState, useEffect} from "react"

export const cardCashContext=React.createContext()

export const CardCashProvider=(props)=>{
    const [cashedCards, setCashed]=useState([])

    const GetCashedCards=()=>{
        return fetch(`http://localhost:8088/cardCashing`)
        .then(res=>res.json())
        .then(setCashed)
    }
    const addToCardsCashed=(cardObject)=>{
        return fetch("http://localhost:8088/cardCashing",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(cardObject)
        })
        .then(GetCashedCards)
        }
    useEffect(()=>{
        GetCashedCards()
    },[cashedCards])

    return(
        <cardCashContext.Provider value={{
            cashedCards, addToCardsCashed, GetCashedCards
        }}>
            {props.children}
        </cardCashContext.Provider>
    )
}