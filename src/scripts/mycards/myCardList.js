import React, { useContext, useState, useEffect } from "react";
import { Card } from "./MyCards";
import { cardsOwnedContext } from "../providers/cardsOwnedProvider";
import { cardCashContext } from "../providers/cardCashingProvider";
import "../../styles/cards/cards.css"
export const MyCardList = () => {
    const [filteredCard, setCard] = useState([]);
    const { cardsOwned, GetCardsOwned } = useContext(cardsOwnedContext);
    const { cashedCards } = useContext(cardCashContext);
    const ownedCards = cardsOwned.filter(card => card.ownerId === parseInt(localStorage.getItem("user")))

    const filterCards = (colorValue) => {
        setCard([]);
        ownedCards.map(ownedCard => {
            return (
                cashedCards.map(cashedCard => {
                    if (ownedCard.cardId === cashedCard.id && colorValue === 0) {
                        setCard(filteredCard => [...filteredCard, cashedCard]);
                    }
                    if (ownedCard.cardId === cashedCard.id && colorValue === 1) {
                        const colorArray = cashedCard.colorIdentity
                        if (colorArray.includes("B")) {
                            setCard(filteredCard => [...filteredCard, cashedCard]);
                        }
                    }
                    if (ownedCard.cardId === cashedCard.id && colorValue === 2) {
                        const colorArray = cashedCard.colorIdentity
                        if (colorArray.includes("U")) {
                            setCard(filteredCard => [...filteredCard, cashedCard]);
                        }
                    }
                    if (ownedCard.cardId === cashedCard.id && colorValue === 3) {
                        const colorArray = cashedCard.colorIdentity
                        if (colorArray.includes("G")) {
                            setCard(filteredCard => [...filteredCard, cashedCard]);
                        }
                    }
                    if (ownedCard.cardId === cashedCard.id && colorValue === 4) {
                        const colorArray = cashedCard.colorIdentity
                        if (colorArray.includes("R")) {
                            setCard(filteredCard => [...filteredCard, cashedCard]);
                        }
                    }
                    if (ownedCard.cardId === cashedCard.id && colorValue === 5) {
                        const colorArray = cashedCard.colorIdentity
                        if (colorArray.includes("W")) {
                            setCard(filteredCard => [...filteredCard, cashedCard]);
                        }
                    }
                    if (ownedCard.cardId === cashedCard.id && colorValue === 6) {
                        const typesArray = cashedCard.types
                        if (typesArray.includes("Artifact")) {
                            setCard(filteredCard => [...filteredCard, cashedCard]);
                        }
                    }
                })
            )
        })
    }
    useEffect(() => {
        GetCardsOwned()
    }, [])

    useEffect(()=>{
        filterCards(0)
    },[cardsOwned])
    return (
        <>
            <h1 className="title">Cards</h1>
            <select
                className="color"
                onChange={event => {
                    filterCards(parseInt(event.target.value))
                }}>
                <option value="0">Color Select </option>
                <option value="1">Black</option>
                <option value="2">Blue</option>
                <option value="3">Green</option>
                <option value="4">Red</option>
                <option value="5">White</option>
                <option value="6">Colorless</option>
            </select>
            <div className="cards">
                {
                    filteredCard.map(card => {
                        return (ownedCards.map(ownedCards => {
                            if (ownedCards.cardId === card.id) {
                                return (<Card key={card.id} card={card} ownedId={ownedCards.id} />)
                            }
                        })
                        )
                    })
                }
            </div>
        </>
    )
}