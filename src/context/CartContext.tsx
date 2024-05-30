import { createContext, useEffect, useState } from "react";

interface CartContextProps {
  cart: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<string[]>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: string) => {
    if (cart && !cart?.includes(item)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (item: string) => {
    setCart(cart?.filter((i) => i !== item));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
