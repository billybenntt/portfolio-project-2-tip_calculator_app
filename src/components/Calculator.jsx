import { useCallback, useEffect, useState } from 'react'
import moneyIcon from '/src/assets/images/icon-dollar.svg'
import personIcon from '/src/assets/images/icon-person.svg'

const initialState = {
  bill: { amount: '', people: '', tip: '', custom_tip: '' },
  total: { tipAmountPerson: '0.00', totalAmountPerson: '0.00' }
}

function Calculator () {

  const [bill, setBill] = useState(initialState.bill)
  const [total, setTotal] = useState(initialState.total)

  // CALCULATE BILL
  const calculateBill = useCallback(() => {
    const tipPercentage = ((+bill.tip) || (+bill.custom_tip)) / 100
    const billSubTotal = +bill.amount
    const numberPeople = +bill.people === 0 ? 1 : +bill.people
    const tipTotal = (billSubTotal * tipPercentage)
    const billTotal = billSubTotal + tipTotal
    const tipDivided = (tipTotal / numberPeople).toFixed(2)
    const billDivided = (billTotal / numberPeople).toFixed(2)

    const newTotal = {
      tipAmountPerson: tipDivided,
      totalAmountPerson: billDivided,
    }
    setTotal(newTotal)
  }, [bill])

  // EFFECT - CALCULATE AND RELOAD COMPONENT
  useEffect(() => {
    calculateBill()
  }, [bill, calculateBill])

  //  EVENT LISTENER - CLEAR VALUES
  const clearBill = () => {
    setTotal(initialState.total)
    setBill(initialState.bill)
  }

  //  EVENT LISTENER - UPDATE VALUES

  const handleChange = (e) => {
    const { value, name } = e.target
    setBill((prevState) => {
      const isValidNumber = !isNaN(value)
      switch (name) {
        case 'amount':
          return isValidNumber ? { ...prevState, amount: value } : prevState
        case 'people':
          return isValidNumber ? { ...prevState, people: value } : prevState
        case 'custom-tip':
          return isValidNumber ? { ...prevState, custom_tip: value, tip: '' } : prevState
        case 'tip':
          return { ...prevState, [name]: value, custom_tip: '' }
        default:
          return { ...prevState, [name]: '' }
      }
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
                className="input-control"
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
              <input type="text"
                placeholder="custom"
                name="custom-tip"
                value={bill.custom_tip}
                onChange={(e) => handleChange(e)}
                className="tip-btn-custom"/>
            </div>
          </div>
          <div className="calculator-counter">
            <div className="input-title-group">
              <h4 className="input-title">Number of People</h4>
              <h4 className={bill.people === '0' ? 'input-error active' : 'input-error'}>
                Cannot Be Zero
              </h4>
            </div>
            <div className="input-group">
              <img src={personIcon} alt="icon" className="icon"/>
              <input type="text"
                pattern="[0-9]"
                name="people"
                value={bill.people}
                onChange={(e) => handleChange(e)}
                className={bill.people === '0' ? 'input-control active' : 'input-control'}
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
              <h2 className="output-amount">${total.tipAmountPerson}</h2>
            </div>
            <div className="output-group">
              <div>
                <h4 className="output-title">Total</h4>
                <h5 className="output-subtext">/person</h5>
              </div>
              <h2 className="output-amount">${total.totalAmountPerson}</h2>
            </div>
          </div>
          <div className="output-reset-btn" onClick={clearBill}>
            <span>RESET</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
