import React, { useState } from 'react'
import './App.css'
import axios from './axios'
import { useEffect } from 'react'

function App() {

    const [data, setdata] = useState([])
    const [iserror, setiserror] = useState('')
    const url = `https://jsonplaceholder.typicode.com`;

    // axios
    // useEffect(() => {
    //     axios.get(`${url}/posts`)
    //         .then((res) => { setdata(res.data) })
    //         .catch((error) => { setiserror(error.message) })
    // }, [])

    
    // axios await
    const getApiData = async() => {
        try {
            const res = await axios.get("/posts")
            setdata(res.data)            
        } catch (error) {
            setiserror(error.message)
        }
    }
    
    useEffect(() => {
        getApiData();
    }, [])


    return (
        <>
            <h1>Axios</h1>
            {iserror !== '' && <h2 style={{ color: '#ccc' }}>{iserror}</h2>}
            {data.map((post, index) => {

                const { body, title, id } = post;

                return (
                    <div key={index}>
                        <span>{id}</span>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                )
            })}
        </>
    )
}

export default App
