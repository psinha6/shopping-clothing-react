import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.jsx";
import { CartIconContainer, IconCount, ShoppingIcon } from "./cart-icon.styles.jsx";

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <IconCount>{cartCount}</IconCount>
        </CartIconContainer>
    )
}

export default CartIcon;