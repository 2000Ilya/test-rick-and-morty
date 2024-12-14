import { useState, useEffect, useLayoutEffect } from 'react'
import CharactersList from '../../components/CharactersList'
import styles from "./index.module.css"
import PageBar from '../../components/PageBar'
import { useParams } from 'react-router-dom'


const Main = () => {
    const [data, setData] = useState()
    const { page } = useParams()

    async function getCharacters(page) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const json = await response.json()

        setData(json)
    }

    useEffect(() => {
        setData()
        getCharacters(page)
    }, [page])

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [page])

    return (
        <div className={styles.main}>
            {data && data.results && data.info && (
                <>
                    <CharactersList charactersList={data.results} />
                    <PageBar currentPage={Number(page)} totalPages={data.info.pages} />
                </>
            )}
        </div>
    )
}

export default Main