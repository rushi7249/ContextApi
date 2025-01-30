
import React from 'react';
import { useShoe } from '../Context/ShoeContext';
import icon from "../Imgaes/icon.png";
import { useNavigate } from 'react-router-dom';



const Shoe = () => {
    const navigate = useNavigate();
    const { shoes, cart, addToCart, incrementValue, decrementValue } = useShoe();

    const handleClick = () => {
        navigate("/payment");
    };


    const Add = (shoe) => {
        addToCart(shoe);
    };


    const incrementClick = (name) => {
        incrementValue(name)
    }

    const decrementClick = (name) => {
        decrementValue(name)
    }

    return (
        <>
            <div className="shoe_store">
                <nav className="navBar">
                    <ul className="nav_link">
                        <li className="icon"><img src={icon} alt="icon" /></li>
                        <li>Home</li>
                        <li>Categories</li>
                        <li>About Us</li>
                    </ul>
                </nav>

                <section className="main_section">
                    <div className="main_section_div1">
                        {shoes.map((shoe, index) => (
                            <div key={index} className="shoe_card">
                                <img src={shoe.img} alt={shoe.name} className="shoe_image" />
                                <h5 className="shoe_card_h5">{shoe.name}</h5>
                                <p className="shoe_card_p">{shoe.price}</p>
                                <button onClick={() => Add(shoe)}>{shoe.btn}</button>
                            </div>
                        ))}
                    </div>

                    <div className="main_section_div2">
                        <div className="cart">
                            <h5>Cart</h5>
                            <table className="cart_table">
                                <tbody>
                                    {cart.map((item, i) => (
                                        <tr key={i}>
                                            <td className="cart_img"><img src={item.img} alt={item.name} /></td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td><button onClick={() => decrementClick(item.name)}>-</button>{item.quantity} <button onClick={() => incrementClick(item.name)}>+</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="total">
                                <div className="total">
                                    <div className="total">
                                        <h4>Total: ${cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "") * item.quantity), 0)}</h4>
                                    </div>

                                </div>

                            </div>
                            <div>
                                <button onClick={handleClick}>Proceed To Payment</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Shoe;