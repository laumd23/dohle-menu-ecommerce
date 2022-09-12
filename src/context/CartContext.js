import { useState, createContext } from "react";

export const CartContext = createContext();


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, qtyItem) =>{
        if (isInCart(item.id)) {
            sumarCantidad(item, qtyItem);

        } else {
            setCart([...cart, {...item, qtyItem}])
        }
    }

    //corroborar  si el producto está en el carrito(isInCart)
    const isInCart = (id) => {
       return cart.some((prod)=> prod.id === id)
    }

    //sumar cantidades del mismo producto
    const sumarCantidad = (item, qtyItem) => {
        const cartUpDate = cart.map((prod)=>{
            if (prod.id === item.id) {
                const productUpDate = {
                    ...prod,
                    qtyItem: prod.qtyItem + qtyItem
                }
                return productUpDate
            } else {
                return prod 
            }
        })
        setCart(cartUpDate)
    };

    //eliminar un solo producto
    const removeProd = (id) => {
        console.log (`Eliminó producto ${id}`);
        const cartFilter = cart.filter ((prod)=> prod.id !== id)
        setCart(cartFilter);
    }

    //borrar carrito
    const clearCart = () => {
        setCart([])
    }
    
    return(
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeProd }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider