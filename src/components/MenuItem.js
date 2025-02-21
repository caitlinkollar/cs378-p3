import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MenuItem({ item, quantity, updateCart }) {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-4">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/${item.imageName}`} 
                        alt={item.title} 
                        className="img-fluid rounded"
                        style={{ objectFit: "cover", aspectRatio: "1 / 1" }} 
                    />
                </div>
                <div className="col-8 d-flex flex-column justify-content-center">
                    <h2 className="menu-item-name">{item.title}</h2>
                    <p className="menu-description">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="menu-price">${item.price.toFixed(2)}</h3>
                        <div className="d-flex align-items-center">
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => updateCart(item, -1)}
                                disabled={quantity === 0}
                            >−</button>
                            <span className="mx-2">{quantity}</span>
                            <button 
                                className="btn btn-primary btn-sm" 
                                onClick={() => updateCart(item, 1)}
                            >+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
