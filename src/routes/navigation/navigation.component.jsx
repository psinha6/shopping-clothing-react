import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles.jsx";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink className="nav-link" to="/shop">
                        Shop
                    </NavLink>

                    {currentUser ? (
                        <NavLink as='span'onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to="/auth">
                            Sign In
                        </NavLink>
                    )}
                    <CartIcon></CartIcon>
                </NavLinks>
                {isCartOpen && <CartDropdown></CartDropdown>}

            </NavigationContainer>
            <Outlet />
        </Fragment >
    )
}

export default Navigation;