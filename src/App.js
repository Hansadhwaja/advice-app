import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
const baseUrl = 'https://api.adviceslip.com/advice';
const App = () => {
    const [message, setMessage] = useState("");
    const handleClick=(e) => {
        e.preventDefault();
        axios.get(baseUrl)
            .then((response) => {
                const { advice } = response.data.slip;
                setMessage(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        axios.get(baseUrl)
            .then((response) => {
                const { advice } = response.data.slip;
                setMessage(advice);
            })
            .catch((error) => {
                console.log(error);
            });
      },[]);
    return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{message}</h1>
                <button className='button' onClick={(e)=>handleClick(e)}>
                    <span>Give Me Advice!</span>
                </button>
            </div>
        </div>
    )
}

export default App