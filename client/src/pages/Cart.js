import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {

  return (
    <main>
      <Header />
      <div className="flex-row justify-center">
        <h1>Cart</h1>
        <table class="table is-bordered is-striped is-hoverable is-fullwidth" id="invoice-table">
          <tr>
            <th>Entree:</th>
            <th>Unit Price:</th>
          </tr>
        </table>
        <div id="total-price">Total: </div>
      </div>
      <Footer />
    </main>

  );
};

export default Cart;