import { useState } from 'react'
import { InputField } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [ConvertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo); 

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(ConvertedAmount);
  }

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to].value / currencyInfo[from].value).toFixed(2));
  }
  


  return (
    <>
      <h1 className=' text-3xl bg-blue-500 p-4 rounded-lg'>Currency Converter</h1>
      <div>
        <InputField
          label="Amount"
          amount={amount}
          onAmountChange={setAmount}
          currencyOptions={currencyOptions}
          selectedCurrency={from}
          onCurrencyChange={setFrom}
        />
        <InputField
          label="Converted Amount"
          amount={ConvertedAmount}
          amountDisabled={true}
          currencyOptions={currencyOptions}
          selectedCurrency={to}
          onCurrencyChange={setTo}
        />
        <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={convert}>Convert</button>
        <button className='bg-green-500 text-white p-2 rounded-lg ml-2' onClick={swap}>Swap</button>
      </div>
    </>
  )
}

export default App
