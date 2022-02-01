import { useEffect, useState } from 'react'
import axios from "axios";

const SuperHeroes = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/superHeroes").then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h3>Loading .......</h3>
    }

    return(
        <>
            <h1>SuperHeroes page</h1>
            <ul>
                {
                    data.map(superHero => <li key={superHero.id}>{superHero.name}</li>)
                }
            </ul>
        </>
    )
}

export default SuperHeroes