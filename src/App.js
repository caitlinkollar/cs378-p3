import { useState } from "react";
import './App.css';
import LogoWithSubtitle from './components/Logo';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';

// Menu data
const menuItems = [
  { id: 1, title: 'Gyoza', description: 'Japanese dumplings', imageName: 'gyoza.png', price: 5.99 },
  { id: 2, title: 'Sushi', description: 'Japanese rice rolls', imageName: 'sushi.png', price: 6.99 },
  { id: 3, title: 'Ramen', description: 'Japanese noodle soup', imageName: 'ramen.png', price: 7.99 },
  { id: 4, title: 'Matcha Cake', description: 'Japanese green tea cake', imageName: 'matcha-cake.png', price: 4.99 },
  { id: 5, title: 'Mochi', description: 'Japanese rice cake', imageName: 'mochi.png', price: 3.99 },
  { id: 6, title: 'Yakitori', description: 'Japanese skewered chicken', imageName: 'yakitori.png', price: 2.99 },
  { id: 7, title: 'Takoyaki', description: 'Japanese octopus balls', imageName: 'takoyaki.png', price: 5.99 },
  { id: 8, title: 'Sashimi', description: 'Japanese raw fish', imageName: 'sashimi.png', price: 8.99 },
  { id: 9, title: 'Okonomiyaki', description: 'Japanese savory pancake', imageName: 'okonomiyaki.png', price: 6.99 },
  { id: 10, title: 'Katsu Curry', description: 'Japanese curry with fried pork', imageName: 'katsu-curry.png', price: 9.99 }
];

function App() {
  const [cart, setCart] = useState({});

  const updateCart = (item, change) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      const newQuantity = (newCart[item.id] || 0) + change;
      if (newQuantity > 0) {
        newCart[item.id] = newQuantity;
      } else {
        delete newCart[item.id]; // Remove if quantity is 0
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({}); // Reset everything back to an empty cart
  };

  return (
    <div className="container mt-4">
      <LogoWithSubtitle subtitle={"DELICIOUS JAPANESE FOOD"} />
      
      <h2 className="text-center my-4">Menu</h2>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem 
            key={item.id} 
            item={item} 
            quantity={cart[item.id] || 0}
            updateCart={updateCart} 
          />
        ))}
      </div>

      <Cart cart={cart} menuItems={menuItems} clearCart={clearCart} />
    </div>
  );
}

export default App;
