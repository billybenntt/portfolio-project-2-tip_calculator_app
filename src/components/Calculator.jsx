import { useCallback, useEffect, useState } from 'react'
import moneyIcon from '/src/assets/images/icon-dollar.svg'
import personIcon from '/src/assets/images/icon-person.svg'

function Calculator () {

  const [bill, setBill] = useState({
    amount: '',
    tip: 0,
    people: 1,
  })

  const [total, setTotal] = useState({
    tipAmountPerson: 0,
    totalAmountPerson: 0,
  })


  // CALCULATE BILL AND AVOID UNNECESARY RE RENDERING
  const calculateBill = useCallback(() => {
    const totalAmountPerson = parseFloat((bill.amount / bill.people).toFixed(2))
    const newTotal = {
      tipAmountPerson: 0,
      totalAmountPerson,
    }
    setTotal(newTotal)
  }, [bill])


  // EFFECT RELOAD COMPONENT
  useEffect(() => {
    calculateBill()
  }, [bill, calculateBill])



  const handleChange = (e) => {
    const { value, name, type, checked } = e.target

    setBill((prevState) => {

      // Update if value is not NAN and Changing amount
      if (!isNaN(parseFloat(value)) && name === 'amount') {
        return { ...prevState, [name]: parseFloat(value) }
      }

      if (!isNaN(parseFloat(value)) && name === 'people') {
        return { ...prevState, [name]: parseFloat(value) }
      }

      // Else return as is but return to default
      return { ...prevState, [name]: '' }
    })

  }

  return (
    <div className="calculator">
      <div className="calculator-center">
        {/* INPUT CONTAINER */}
        <div className="input-container">
          <div className="calculator-bill">
            <h4 className="input-title">Bill</h4>
            <div className="input-group ">
              <img src={moneyIcon} alt="icon" className="icon"/>
              <input type="text"
                name="amount"
                value={bill.amount}
                onChange={(e) => handleChange(e)}
                className="input-control input-amount-focus"
                placeholder="0"/>
            </div>
          </div>
          <div className="calculator-tip">
            <h4 className="input-title">Service Fee %</h4>
            <div className="tip-btn-container">
              <div>
                <label htmlFor="tip-5" className="tip-btn" tabIndex="0">5%</label>
                <input type="radio"
                  className="hidden"
                  checked={bill.tip === '5'}
                  value="5"
                  onChange={handleChange}
                  name="tip"
                  id="tip-5"
                />
              </div>
              <div>
                <label htmlFor="tip-10" className="tip-btn" tabIndex="0">10%</label>
                <input type="radio"
                  className="hidden"
                  checked={bill.tip === '10'}
                  value="10"
                  onChange={handleChange}
                  name="tip"
                  id="tip-10"
                />
              </div>
              <div>
                <label htmlFor="tip-15" className="tip-btn" tabIndex="0">15%</label>
                <input type="radio"
                  className="hidden"
                  checked={bill.tip === '15'}
                  value="15"
                  onChange={handleChange}
                  name="tip"
                  id="tip-15"
                />
              </div>
              <div>
                <label htmlFor="tip-25" className="tip-btn" tabIndex="0">25%</label>
                <input type="radio"
                  className="hidden"
                  checked={bill.tip === '25'}
                  value="25"
                  onChange={handleChange}
                  name="tip"
                  id="tip-25"
                />
              </div>
              <div>
                <label htmlFor="tip-50" className="tip-btn" tabIndex="0">50%</label>
                <input type="radio"
                  className="hidden"
                  checked={bill.tip === '50'}
                  value="50"
                  onChange={handleChange}
                  name="tip"
                  id="tip-50"
                />
              </div>

              {/*CUSTOM TIP */}
              <input type="text" placeholder="custom"
                className="tip-btn-custom"/>
            </div>
          </div>
          <div className="calculator-counter">
            <h4 className="input-title">Number of People</h4>
            <div className="input-group">
              <img src={personIcon} alt="icon" className="icon"/>
              <input type="text"
                pattern="[0-9]"
                name="people"
                value={bill.people}
                onChange={(e) => handleChange(e)}
                className="input-control input-amount-focus"
                placeholder="0"/>
            </div>
          </div>
        </div>
        {/* OUTPUT CONTAINER */}
        <div className="output-container">
          <div>
            <div className="output-group">
              <div>
                <h4 className="output-title">Tip Amount</h4>
                <h5 className="output-subtext">/person</h5>
              </div>
              <h2 className="output-amount">$4.27</h2>
            </div>
            <div className="output-group">
              <div>
                <h4 className="output-title">Total</h4>
                <h5 className="output-subtext">/person</h5>
              </div>
              <h2 className="output-amount">${total.totalAmountPerson}</h2>
            </div>

          </div>

          <div className="output-reset-btn">
            <span>RESET</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Calculator
