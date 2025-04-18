import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, onClick, type = "button", variant = "primary", disabled = false, ...props }) => {
  return (
    <button 
      className={`custom-button ${variant}`} 
      onClick={onClick} 
      type={type} 
      disabled={disabled}
      {...props} 
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, 
  onClick: PropTypes.func,
  type: PropTypes.string, 
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  disabled: PropTypes.bool
};

export default Button;
