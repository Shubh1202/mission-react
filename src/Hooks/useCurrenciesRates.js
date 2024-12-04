import { useEffect, useState } from "react"
// import currencies from './usd.json'

const useCurrenciesRates = (currency) => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    const [currencyList, setCurrencyList] = useState({})

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setCurrencyList(res[currency]))
    }, [currency, url])

    return currencyList

}


export default useCurrenciesRates