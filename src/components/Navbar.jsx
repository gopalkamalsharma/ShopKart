import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({ userName, cart = [] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate();

    const cartCount = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

    return (
        <>
            {/* Top Shipping Bar */}
            <div className="top-bar">
                <div className="container-fluid">
                    <span className="new-badge">NEW</span>
                    Free shipping on orders above ₹499 | Easy 7-day returns
                </div>
            </div>
            {/* Main Navbar */}
            <nav className="navbar">
                <div className="container-fluid">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="ShopKart" className="shopkart-logo" />
                    </Link>
                    {/* Mobile Toggle */}
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon">{isMenuOpen ? '✕' : '☰'}</span>
                    </button>
                    {/* Navigation */}
                    <div className={`navbar-collapse ${isMenuOpen ? 'active' : ''}`} id="shopKartNavbar">
                        <ul className="navbar-nav main-nav">
                            <li className="nav-item"><NavLink className="nav-link" to="/"> Home </NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/product"> Products </NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/about"> About </NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/contact"> Contact </NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/cart"> Cart </NavLink></li>
                            <li className="nav-item"><a
                                className="nav-link"
                                href="#trending"
                                onClick={(e) => {
                                    e.preventDefault(); //this will stop page relode

                                    if (window.location.pathname === "/") {
                                        document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" });
                                    }
                                    else {
                                        navigate("/");

                                        setTimeout(() => {
                                            document.getElementById("trending")?.scrollIntoView({
                                                behavior: "smooth"
                                            });
                                        }, 100);
                                    }
                                }}
                            >
                                Trending 🔥
                            </a></li>
                        </ul>
                        {/* Search */}
                        <div className="search-box">
                            <input type="text" placeholder="Search for products..." />
                            <button className="search-btn">🔍</button>
                        </div>
                        {/* Icons */}
                        <div className="nav-actions">
                            <div className="cart-wrapper">
                                <Link to="/cart" className="nav-icon">🛒</Link>
                                <span className="cart-count">
                                    {cartCount}
                                </span>
                            </div>
                            {/* Account / Greeting */}
                            {userName ? (
                                <span className="user-greeting">
                                    <img src="/icons/profile-icon.png" alt="Profile" className="greeting-profile-icon" />
                                    Hello, {userName}
                                </span>
                            ) : (
                                <div className="dropdown account-dropdown">
                                    <button className="account-btn" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" aria-label="My Account">
                                        <img src="/icons/profile-icon-2.png" alt="My Account" className="profile-icon" />
                                    </button>

                                    <ul className="dropdown-menu account-menu">
                                        <li><a className="dropdown-item" href="/login">Login</a></li>
                                        <li><a className="dropdown-item" href="/register">Register</a></li>
                                    </ul>
                                </div>
                            )}
                            <div className="dropdown account-dropdown">
                                <ul className="dropdown-menu account-menu">
                                    <li> <Link className="dropdown-item" to="/login"> Login </Link> </li>
                                    <li><Link className="dropdown-item" to="/register"> Register </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;