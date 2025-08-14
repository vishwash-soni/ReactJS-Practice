import {useEffect,useState} from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {

        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
        fetch(url)
        .then((response) => {
            return response.json();
        }).then((response) => {
            setCurrencyInfo(response[currency]);
            console.log(response[currency]);
        })

    }, [currency]);

    return currencyInfo;
}

export default useCurrencyInfo;
