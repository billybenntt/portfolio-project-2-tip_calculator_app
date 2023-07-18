import Calculator from './components/Calculator.jsx'
import Logo from '/src/assets/images/logo.svg'

function App () {
  return (
    <div className="main">
      <div>
        <img src={Logo} alt="logoimg" className="mx-auto m-10"/>
        <Calculator/>
      </div>
    </div>
  )
}

export default App
