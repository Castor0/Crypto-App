import { useState } from 'react';
import ExchangeRate from "./ExchangeRate";
import axios from 'axios';

const CurrencyConverter =() => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1);

    console.log(amount)
    
    const convert = () => {

        

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency},
  headers: {
    'X-RapidAPI-Key': 'ccc690bebemsh3d2d103e2716209p1f3507jsn58261c964ccd',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options).then( (response) => {
	console.log(response.data);
}).catch( (error) => {
	console.error(error);
});
    }

       

    return (
      <div className= "currency-converter">
       <h2>CurrencyConverter</h2>
       <div className = "input-box">
        <table>
            <tbody>
                <tr>
                    <td>Primary Currency</td>
                    <td>
                        <input
                            type= "number"
                            name= "currency-amount-1"
                            value= {amount}
                            onChange ={(e) => setAmount(e.target.value)}
                        />
                    </td>
                    <td>
                        <select
                          value= {chosenPrimaryCurrency}
                          name= "currency-amount-1"
                          className="currency-options"  
                          onChange ={(e) => setChosenPrimaryCurrency(e.target.value)}
                        >
                            {currencies.map( currency => (<option>{currency}</option>))}
                        </select>
                            
                    </td>
                </tr>
                <tr>
                    <td>Secondary Currency</td>
                    <td>
                        <input
                            type= "number"
                            name= "currency-amount-2"
                            value= {""}
                        />
                    </td>
                    <td>
                        <select
                          value= {chosenSecondaryCurrency}
                          name= "currency-amount-2"
                          className="currency-options" 
                          onChange={(e) => setChosenSecondaryCurrency(e.target.value)} 
                        >
                            {currencies.map( currency => (<option>{currency}</option>))}
                        </select>
                            
                    </td>
                </tr>
            </tbody>
        </table>

        <button id='convert-button' onClick={convert}>Convert</button>

       </div>
       <ExchangeRate />
      </div>
    );
  }
  
  export default CurrencyConverter;
  