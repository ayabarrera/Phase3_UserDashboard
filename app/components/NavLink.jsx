import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ href, label, isActive, onClick }) => {
  return (
    <a
      href={href}
      className={`link ${isActive ? "active" : ""}`}
      onClick={() => onClick(href)}
      aria-label={`Go to ${label}`}
    >
      {label}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavLink;
