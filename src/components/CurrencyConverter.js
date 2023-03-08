import { useState } from 'react';
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter =() => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')

    

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
                            value= {""}
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

       </div>
       <ExchangeRate />
      </div>
    );
  }
  
  export default CurrencyConverter;
  