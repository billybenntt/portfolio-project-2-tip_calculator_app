import Calculator from './components/Calculator.jsx'
import Logo from '/src/assets/images/logo.svg'

function App () {
  return (
    <div className="main">
      <div>
        <img src={Logo} alt="logoimg" className="logo"/>
        <Calculator/>
      </div>
    </div>
  )
}

export default App
