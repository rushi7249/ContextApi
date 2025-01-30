import './App.css';
import { ShoeProvider, ShoeContext } from './Context/ShoeContext';
import React, { useContext } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "./Component/Routing";

function App() {
  const [cart, setCart] = React.useState([]);

  const { shoes } = useContext(ShoeContext);

  const addToCart = (shoe) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.name === shoe.name);
      if (existingItem) {
        return prev.map((item) =>
          item.name === shoe.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...shoe, quantity: 1 }];
    });
  };


const incrementValue=(name)=>{
setCart((prev)=>
prev.map((item) =>item.name===name?{...item, quantity: item.quantity + 1}:item)
)
}

const decrementValue=(name)=>{


  setCart((prevCart) =>
            prevCart.map((item, index) => (
                item.name === name ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
            )).filter(item => item.quantity > 0)
        )

}

  return (
    <ShoeProvider value={{ cart, shoes, addToCart,incrementValue,decrementValue }}>
      <Router>
        <Routing />
      </Router>
    </ShoeProvider>
  );
}

export default App;
