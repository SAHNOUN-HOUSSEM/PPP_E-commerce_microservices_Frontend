import { createContext, useEffect, useState } from "react";

interface CartContextProps {
  cart: string[];
  open: boolean;
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  clearCart: () => void;
  setOpen: (open: boolean) => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  open: false,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  setOpen: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<string[]>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: string) => {
    if (cart && !cart?.includes(item)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (item: string) => {
    setCart(cart.filter((i) => i !== item));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, open, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
