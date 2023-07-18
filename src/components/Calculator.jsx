import moneyIcon from '/src/assets/images/icon-dollar.svg'
import personIcon from '/src/assets/images/icon-person.svg'

function Calculator () {
  return (
    <div className="calculator">
      <div className="calculator-center">
        {/* INPUT CONTAINER */}
        <div className="input-container">
          <div className="calculator-bill">
            <h4 className="input-title">Bill</h4>
            <div className="input-group ">
              <img src={moneyIcon} alt="icon" className="icon"/>
              <input type="number"
                className="input-control input-amount-focus"
                placeholder="0"/>
            </div>

          </div>
          <div className="calculator-tip">
            <h4 className="input-title">Select Tip %</h4>
            <div className="tip-btn-container">
              <div className="tip-btn" tabIndex="0">
                <p>5%</p>
              </div>
              <div className="tip-btn" tabIndex="0">
                <p>10%</p>
              </div>
              <div className="tip-btn" tabIndex="0">
                <p>15%</p>
              </div>
              <div className="tip-btn" tabIndex="0">
                <p>25%</p>
              </div>
              <div className="tip-btn" tabIndex="0">
                <p>50%</p>
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
              <input type="number"
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
              <h2 className="output-amount">$32.79</h2>
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
