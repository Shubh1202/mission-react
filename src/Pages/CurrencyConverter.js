import { memo, useState, useEffect, useCallback } from "react"
import useCurrenciesRates from "../hooks/useCurrenciesRates"

const InputBox = memo(({
    label,
    amount,
    setAmount,
    selectedCurrency,
    setCurrency,
    currencyList = [],
    amountDisable = false,
    currencyDisable = false
}) => {
    return (
        <div className="flex gap-3 border border-gray-150 px-5 py-7 my-3 bg-white rounded-lg">
            <div>
                <label className="capitalize text-gray-600">{label}</label>
                <input type="number" min={1} value={amount} onChange={(e) => setAmount && setAmount(parseFloat(e.target.value))} disabled={amountDisable} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
                <label className="capitalize text-gray-600">currency type</label>
                <select value={selectedCurrency} onChange={(e) => setCurrency && setCurrency(e.target.value)} disabled={currencyDisable} className="uppercase w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {currencyList.length >0 && currencyList.map((data) => <option key={data} value={data} className="uppercase">{data}</option>)}
                </select>
            </div>
        </div>
    )
})


const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState('usd')
    const [toCurrency, setToCurrency] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState('')

    let prxItems = useCurrenciesRates(fromCurrency)
    const currencyItemsList = Object.keys(prxItems)

    // function swapCurrency(){
    //     setFromCurrency(toCurrency)
    //     setToCurrency(fromCurrency)
    // }

    // function convertCurrency(){
    //     const convertAmount = prxItems[toCurrency] * amount
    //     setConvertedAmount(convertAmount.toFixed(3))
    // }

    const swapCurrency = useCallback(() => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }, [toCurrency, fromCurrency])

    const convertCurrency = useCallback(() => {
        const convertAmount = prxItems[toCurrency] * amount
        setConvertedAmount(convertAmount.toFixed(3))
    }, [toCurrency, prxItems, amount])

    useEffect(() => {
        convertCurrency()
    }, [toCurrency, fromCurrency, prxItems, convertCurrency])

    return (
        <div className='flex items-center justify-center'>
            <div className='shadow-lg rounded-lg p-8 w-full max-w-lg'>
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Currency Converter</h2>
                <div className="relative">
                    <InputBox label='from' amount={amount} setAmount={setAmount} selectedCurrency={fromCurrency} setCurrency={setFromCurrency} currencyList={currencyItemsList}/>
                    <button onClick={swapCurrency} type='button' className="absolute bg-blue-600 text-white font-bold py-1 px-8 rounded-lg hover:bg-blue-700 transition duration-300 swap-button">Swap</button>
                    <InputBox label='to' amount={convertedAmount} amountDisable={true} selectedCurrency={toCurrency} setCurrency={setToCurrency} currencyList={currencyItemsList}/>
                </div>
                <div className="mt-3">
                    <button type="button" onClick={convertCurrency} className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">Convert <span className="uppercase">{fromCurrency}</span> to <span className="uppercase">{toCurrency}</span></button>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter