import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {

  return (
    <main>
      <Header />
      <div className="flex-row justify-center">
        <h1>Cart</h1>
        <table>
          <tr>
            <th>Entree:</th>
            <th>Unit Price:</th>
          </tr>
        </table>
        <div>Total: </div>
      </div>
      <Footer />
    </main>

  );
};

export default Cart;