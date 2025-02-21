import React from 'react';

function Cart({ cart, menuItems, clearCart }) {
    const subtotal = menuItems.reduce((total, item) => {
        return total + (cart[item.id] || 0) * item.price;
    }, 0);

    const handleOrder = () => {
        const orderedItems = menuItems
            .filter(item => cart[item.id]) // Get only items that were added
            .map(item => `${item.title} x ${cart[item.id]}`)
            .join("\n");

        if (orderedItems) {
            alert(`Order Placed:\n${orderedItems}\n\nTotal: $${subtotal.toFixed(2)}`);
            clearCart(); // Reset cart after ordering
        } else {
            alert("No items in cart.");
        }
    };

    return (
        <div className="cart-container">
            <div className="cart-content">
                <h3 className="subtotal-text">Subtotal: ${subtotal.toFixed(2)}</h3>
                <div className="cart-buttons">
                    <button className="btn btn-success" onClick={handleOrder}>Order</button>
                    <button className="btn btn-danger" onClick={clearCart}>Clear All</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
