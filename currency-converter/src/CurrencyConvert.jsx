// import React from 'react'
import './App.css'
import { useState } from "react"

const CurrencyConvert = () => {
    const [myData, setMyData] = useState({})
    const [countriesCode, setCountriesCode] = useState({})
    const [amount, setAmount] = useState(1)
    const [fromCountry, setFromCountry] = useState("USD")
    const [toCountry, setToCountry] = useState("PKR")
    const [isLoading, setIsLoading] = useState(false)
    
    const fetchApiData  = async () => {
        try {
            setIsLoading(true)
            // const response = await fetch(`https://v6.exchangerate-api.com/v6/208839250e50e90eafbf83b9/latest/PKR`)
            const response = await fetch(`https://v6.exchangerate-api.com/v6/c909d6c04a0d61c412413ef8/pair/${fromCountry}/${toCountry}/${amount}`)
            const data = await  response.json()
            setMyData(data)
            setCountriesCode(data)
            console.log(myData.conversion_result);
            console.log(countriesCode);
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <div className="currency-convert">
        <div className='result'>CurrencyConvert</div>
        <br />
        From
        <input type="text" value={fromCountry} onChange={e=>setFromCountry(e.target.value)}/>
        To
        <input type="text" value={toCountry} onChange={e=>setToCountry(e.target.value)}/>
        <br />
        <label  htmlFor="currency-input">Enter amount: </label>
        <input type="number" id="currency-input" value={amount} onChange={e=>setAmount(parseFloat(e.target.value))}/>
        <button onClick={fetchApiData}> Convert </button>
        <br />
        {isLoading ? (<p>Loading...</p>) : myData ? (<div className='result'>{myData.conversion_result}</div>) : (<p>Data is not Available.</p>)}
        
        
    </div>
  )
}

export default CurrencyConvert