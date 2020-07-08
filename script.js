const currencyRatio = {
    vnd: {
        usd: 0.000043,
        krw: 0.051,
        eur: 0.000039,
        vnd: 1
    },
    usd: {
        usd: 1,
        krw: 1193.27,
        eur: 0.9,
        vnd: 23235.5
    },
    krw: {
        usd: 0.00084,
        krw: 1,
        eur: 0.00075,
        vnd: 19.47
    },
    eur: {
        usd: 1.13,
        krw:1348.77,
        eur:1,
        vnd:26135.96,
    }
};




function getConversionRate(from, to) {
    return currencyRatio[from][to];
}

let convertButton = document.getElementById('convertButton')
convertButton.addEventListener("click", changeMoney)

function changeMoney() {
    let amountInput = document.getElementById('amount')
    let result = amountInput.value
    // console.log(result)
    let fromCurrency = document.getElementById("fromCurrencyList")
    let toCurrencyEl = document.querySelector('input[name="unit"]:checked');
    if(!toCurrencyEl) {
        alert("Please select Destination Currency!!");
    } else {
        let convertedAmount = result * getConversionRate(fromCurrency.value, toCurrencyEl.value)
       let abc = convertedAmount.toFixed(2)
        let wageExchange = formatCurrency(toCurrencyEl.value,abc)

        document.getElementById("result").innerHTML = `the money in exchange is ${wageExchange}`    
    }
}

 function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
} 






