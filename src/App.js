import { useState } from 'react';

import Header from './components/Layout/Header';
import Medicine from './components/Medicine/Medicine';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };

  const hideCartHandler = () =>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={ hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Medicine />
      </main>
      <p>Developed by Vikas Singh Bhadauria</p>
      </CartProvider>
  );
}

export default App;
