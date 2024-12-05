import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shipping = 100; // Flat shipping rate for simplicity
  const subtotal = calculateSubtotal();
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-container">
          {/* Cart Table */}
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="product-info">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>{item.size || "-"}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity} EGP</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Cart Summary */}
          <div className="cart-summary">
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>{subtotal} EGP</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>{shipping} EGP</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>{total} EGP</span>
            </div>
            <button className="checkout-button">Proceed to checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
