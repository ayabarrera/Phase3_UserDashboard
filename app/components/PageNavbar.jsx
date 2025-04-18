import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import NavLink from "./NavLink";
import "./pagenavbar.css";

function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        window.location.href = "/login";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false); // Close menu on link click
  };

  const mainLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/archives", label: "Archives" },
    { href: "/about", label: "About" },
  ];

  const authLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/login", label: "Login" },
    { href: "/register", label: "Sign Up" },
  ];

  const showMainLinks = ["/dashboard", "/archives", "/about"].includes(
    pathname
  );

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a
        href="/"
        className="logo"
        onClick={() => handleClick("/")}
        aria-label="Go to Home"
      >
        PEN & PIXEL
      </a>

      {/* Burger Icon */}
      <button
        className="burger-menu"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        {showMainLinks
          ? mainLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeLink === link.href}
                onClick={handleClick}
              />
            ))
          : authLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeLink === link.href}
                onClick={
                  link.href === "/register"
                    ? () => {
                        handleClick(link.href);
                        window.location.href = link.href;
                      }
                    : handleClick
                }
              />
            ))}

        {showMainLinks && (
          <Button
            onClick={handleLogout}
            variant="secondary"
            aria-label="Log out of your account"
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
