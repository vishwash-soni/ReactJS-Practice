import {use, useEffect,useState} from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {

        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((response) => {
            response.json();
        }).then((response) => {
            setCurrencyInfo(response[currency]);
            console.log(currencyInfo);
        })
    }, [currency]);

    return currencyInfo;
}

export default useCurrencyInfo;
