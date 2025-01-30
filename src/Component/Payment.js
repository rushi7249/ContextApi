import React from 'react'
import icon from "../Imgaes/icon.png"
import { useShoe } from "../Context/ShoeContext"
import { useNavigate } from 'react-router-dom'
const Payment = () => {

  const [selectOption, setSelectOption] = React.useState("")
  const handledChanged = (e) => {
    setSelectOption(e.target.value)
  }

  const navigate = useNavigate()

  const { cart } = useShoe()
  const handlclick = () => {
    navigate("/")
  }
  return (
    <div>
      <nav className="navBar">
        <ul className="nav_link">
          <li className="icon"><img src={icon} alt="icon" /></li>
          <li>Home</li>
          <li>Categories</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className="main">

        <div className="div1">

          <div className="radio_button">
            <div>
              <label>Credit Card</label>
              <input type="radio" value="creditCard" checked={selectOption === "creditCard"} onChange={handledChanged} />

            </div>
            <div>
              <label>Cash On Mode</label>

              <input type="radio" value="cash" checked={selectOption === "cash"} onChange={handledChanged} />

            </div>

          </div>

          <div>
            <div>
            <label>Enter Your Card Number</label>
<input type="text" placeholder="Card Number"/>
            </div>
           <div>
           <label>Enter Your Expiry Date</label>
<input type="text" placeholder="Expiry Date"/>
           </div>
<div>
<label>Enter Your Cvv</label>
<input type="text" placeholder="Cvv"/>
</div>



          </div>
        </div>

        <div className="div2">
          <div className="checking_cart">
            <div>
              <table className="cart_table">
                <tbody>
                  {cart.map((item, i) => (
                    <tr key={i}>
                      <td className="cart_img"><img src={item.img} alt={item.name} /></td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>

                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
            <div className="total">
              <div className="total">
                <div className="total">
                  <h4>Total: ${cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "") * item.quantity), 0)}</h4>
                </div>

              </div>

            </div>

            <div>
              <button onClick={handlclick}>Go Back To Shopping</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Payment
