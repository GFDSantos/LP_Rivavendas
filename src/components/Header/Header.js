import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import React from 'react';
import './style.css';
import logo from "../../assets/icons/logo_rivavendas.png";
import whatsappIcon from "../../assets/icons/whatsapp-icon.png";

const Header = ({ onReset }) => {

    const location = useLocation();

    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (onReset) {
            onReset(); // limpa filtros
        }

        navigate("/"); // 🔥 LOGO SEMPRE VOLTA PRA HOME
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="header">
            <div className="header-container">

                {/* LOGO */}
                <div className="logo-author">
                    <div className="logo-link" onClick={handleLogoClick}>
                        <img
                            src={logo}
                            alt="Logo Riva Vendas"
                            className="logo"
                        />
                    </div>
                </div>

                {/* MENU */}
                <nav className="center-nav">

                
                <Link
                  to="/conheca"
                  className={`nav-link ${location.pathname === "/conheca" ? "active" : ""}`}
                  onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                >
                    Conheça a Construtora Riva
                </Link>
                <Link
                    to="/contact"
                    className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                >
                    Formulário de Interesse
                </Link>

                </nav>

                {/* WHATSAPP */}
                <a
                    href="https://wa.me/5521972973535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp"
                >
                    <img
                        src={whatsappIcon}
                        alt="WhatsApp"
                        className="whatsapp-icon"
                    />
                    <span>WhatsApp</span>
                </a>

            </div>
        </header>
    );
};

export default Header;