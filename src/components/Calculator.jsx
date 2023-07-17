function Calculator () {
  return (
    <div className="calculator">
      <div className="calculator-center">
        {/* INPUT CONTAINER */}
        <div className="input-container">
          <div className="calculator-bill">
            <h4 className="group-title">Bill</h4>
            <div>
              <input type="text" className="input-control" placeholder="0"/>
            </div>
          </div>
          <div className="calculator-tip">
            <h4 className="group-title">Select Tip %</h4>
            <div className="tip-btn-container">
              <div className="tip-btn">5%</div>
              <div className="tip-btn">10%</div>
              <div className="tip-btn">15%</div>
              <div className="tip-btn">25%</div>
              <div className="tip-btn">50%</div>
              <div className="tip-btn">
                <input type="text" placeholder="Custom" className="tip-btn-input"/>
              </div>
            </div>
          </div>
          <div className="calculator-counter">
            <h4 className="group-title">Number of People</h4>
            <input type="text" className="input-control" placeholder="0"/>
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
