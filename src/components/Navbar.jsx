import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

                    {/* All Categories Dropdown */}
                    <div className="dropdown category-dropdown">
                        <button className="category-btn dropdown-toggle" type="button">
                            All Categories
                        </button>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Electronics</a></li>
                            <li><a className="dropdown-item" href="#">Fashion</a></li>
                            <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
                            <li><a className="dropdown-item" href="#">Beauty & Personal Care</a></li>
                            <li><a className="dropdown-item" href="#">Sports & Fitness</a></li>
                            <li><a className="dropdown-item" href="#">Books & Stationery</a></li>
                        </ul>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon">{isMenuOpen ? '✕' : '☰'}</span>
                    </button>

                    {/* Navigation */}
                    <div className={`navbar-collapse ${isMenuOpen ? 'active' : ''}`} id="shopKartNavbar">
                        <ul className="navbar-nav main-nav">
                            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/product">Products</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">Deals</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">Contact</Link></li>
                        </ul>

                        {/* Search */}
                        <div className="search-box">
                            <input type="text" placeholder="Search for products..." />
                            <button className="search-btn">🔍</button>
                        </div>

                        {/* Icons */}
                        <div className="nav-actions">
                            <span className="nav-icon">❤️</span>

                            <div className="cart-wrapper">
                                <Link to="/cart" className="nav-icon">🛒</Link>
                                <span className="cart-count">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;