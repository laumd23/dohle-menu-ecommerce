import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item, qtyItem) => {
    if (isInCart(item.id)) {
      sumarCantidad(item, qtyItem);
    } else {
      setCart([...cart, { ...item, qtyItem }])
    }
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const sumarCantidad = (item, qtyItem) => {
    const cartUpDate = cart.map((prod) => {
      if (prod.id === item.id) {
        const productUpDate = {
          ...prod,
          qtyItem: qtyItem,
        }
        return productUpDate
      } else {
        return prod
      }
    })
    setCart(cartUpDate)
  };

  const removeProd = (id) => {
    const cartFilter = cart.filter((prod) => prod.id !== id)
    setCart(cartFilter);
  }

  const clearCart = () => {
    setCart([])
  }

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id)
    return product?.qtyItem;
  }

  const totalPrice = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.price * prod.qtyItem;
    })
    return total;
  };

  const totalQuantity = () => {
    let totally = 0;
    cart.forEach((prod) => {
      totally += prod.qtyItem;
    });
    return totally;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeProd,
        getProductQuantity,
        totalPrice,
        totalQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider    