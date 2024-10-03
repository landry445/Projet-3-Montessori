import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Avatar from "../svg/NavBar/Avatar";
import LogoCheminMontessori from "../svg/NavBar/LogoCheminMontessori";
import Panier from "../svg/NavBar/Panier";
import MenuBurger from "../svg/NavBar/MenuBurger";
import NavLinks from "./NavLinks";
import "./styles/NavBar.css";
import StarEmpty from "../svg/StarEmpty";
import AuthModalWrapper from "./AuthModal/AuthModal1";

export default function Navbar() {
  const [displayBurger, setDisplayBurger] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 801px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    await logout(); // Met à jour l'état pour indiquer que l'utilisateur est déconnecté
    navigate("/"); // Redirige vers la page d'accueil après la déconnexion
  };

  // Fonction pour gérer le clic sur le bouton de connexion/déconnexion
  const handleConnectionClick = () => {
    if (user) {
      handleLogout(); // Déconnecte si l'utilisateur est connecté
    } else {
      setIsModalOpen(true); // Ouvre la modal si l'utilisateur n'est pas connecté
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBurger = () => setDisplayBurger(!displayBurger);

  return (
    <div className="navbar">
      {isDesktop && (
        <div className="navbar__desktop">
          <Link to="/">
            <LogoCheminMontessori className="navbar__logo" />
          </Link>
          <NavLinks />
          <div className="navbar__logo-cart">
            {/* Afficher le bouton "Se connecter" ou "Déconnexion" */}
            <button
              className="navbar__connect-button"
              onClick={handleConnectionClick}
              type="button"
            >
              {user ? "Déconnexion" : "Se connecter"}
            </button>
            <Link to="/panier" className="navbar__cart-button">
              <Panier width={40} height={40} />
            </Link>
            <Link to="/profil">
              <Avatar width={40} height={40} />
            </Link>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="navbar__mobile">
          <Link to="/">
            <LogoCheminMontessori className="navbar__logo" />
          </Link>
          <div className="navbar__mobile-icons">
            <Link to="/panier" className="navbar__mobile__cart">
              <Panier width={27} height={27} />
            </Link>
            <button
              type="button"
              onClick={handleBurger}
              aria-label="Open the menu"
              aria-expanded={displayBurger}
              className="navbar__mobile-burger"
              style={{ background: "transparent", border: "none" }}
            >
              <MenuBurger width={30} height={30} />
            </button>
          </div>
          <div
            className={`navbar__mobile-menu ${
              displayBurger ? "open" : "closed"
            }`}
          >
            <NavLinks />
            {/* Afficher le bouton "Connexion" ou "Déconnexion" sur mobile */}
            <button
              className={`navbar__connect-button ${user ? "logout" : "login"}`}
              onClick={handleConnectionClick}
              type="button"
              style={{
                marginBottom: "2rem",
                fontSize: "1.1rem",
              }}
            >
              {user ? "Déconnexion" : "Se connecter"}
            </button>
            <div className="navbar__mobile-star">
              <StarEmpty
                width={50}
                height={50}
                className="navbar_mobile-star-empty1"
              />
              <Link to="/profil">
                <Avatar width={40} height={40} />
              </Link>
              <StarEmpty
                width={50}
                height={50}
                className="navbar_mobile-star-empty3"
              />
            </div>
          </div>
        </div>
      )}

      {/* Afficher la modal d'authentification si isModalOpen est true */}
      {isModalOpen && (
        <AuthModalWrapper
          closeModal={closeModal}
          defaultTab="login"
          onLoginSuccess={() => {
            // Met à jour l'état pour indiquer que l'utilisateur est connecté
            setIsModalOpen(false); // Ferme la modal
          }}
        />
      )}
    </div>
  );
}
