import React, {useState, useEffect} from "react"

export const cardCashContext=React.createContext()

export const CardCashProvider=(props)=>{
    const [cashedCards, setCashed]=useState([])

    const GetCashedCards=()=>{
        return fetch(`http://localhost:8088/cardCashing`)
        .then(res=>res.json())
        .then(setCashed)
    }
    useEffect(()=>{
        GetCashedCards()
    },[])

    return(
        <cardCashContext.Provider value={{
            cashedCards
        }}>
            {props.children}
        </cardCashContext.Provider>
    )
}