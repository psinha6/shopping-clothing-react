import "./button.styles.scss";

/**
 * Button Types 
 * 1) Default
 * 2) Inverted button
 * 3) Google Sign in
 * @param {*} param0 
 * @returns 
 */

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps 
}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}
export default Button;