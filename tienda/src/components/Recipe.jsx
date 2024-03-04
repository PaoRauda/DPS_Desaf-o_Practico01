"use client"
import { useState } from 'react';
import { data } from "../app/data";


export const Recipe = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    var [activeRecipe, setActiveRecipe] = useState(true);


    var ReciboProductos = [...allProducts];
    var ReciboTotal = total;

    function clearCart(){
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    }
    function OnClickCerrar(){
        setActiveRecipe(!activeRecipe);
        clearCart();
        ReciboProductos = '';
        ReciboTotal = '';
    }

    if(activeRecipe == true){
        return (
            <div className='receipt-overlay'>
                <div className='receipt-container'>
                    <h2>Recibo de compra</h2>
                    <ul className="receipt-items">
                        {ReciboProductos.map((item, index) => (
                            <li key={index}>
                                <span>{item.quantity} </span>
                                <span>{item.title} </span>
                                <span>${item.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <span>Total:</span>
                        <span>${ReciboTotal.toFixed(2)}</span>
                    </div>
                    <button className="close-button button" onClick={() => OnClickCerrar()}>Cerrar</button>
                </div>
            </div>
        );
    } else{
        return('');
    }
    
};

