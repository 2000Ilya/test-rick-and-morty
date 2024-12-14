import React, { useEffect, useState } from 'react'
import CharacterCard from '../../components/CharacterCard'
import { useParams } from 'react-router-dom'

const Character = () => {
    /* to do */
    const { characterId } = useParams()

    async function getCharacter(characterId) {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        /* to do */
    }

    useEffect(() => {

        /* to do */
    }, [characterId])

    return (
        <>to do</>
    )
}

export default Character