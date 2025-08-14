import {React,useId} from 'react'

function InputField({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'USD',
    amountDisabled = false,
    currencyDisabled = false
 
}) {

    let id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        disabled={amountDisabled}
      />
      <select
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputField