import Cookies from "js-cookie";
import PropTypes from "prop-types";
import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

// Créer le contexte
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const coockieToken = Cookies.get("auth_token");

  // Définir la fonction decodeToken en dehors de l'utilisation dans useEffect
  const decodeToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload;
    } catch (error) {
      console.info("Erreur lors du chargement du Token");
    }
    return null;
  };

  // Effet pour décoder le token et mettre à jour l'utilisateur
  useEffect(() => {
    if (coockieToken) {
      const decodedUser = decodeToken(coockieToken);
      setUser(decodedUser); // Utiliser decodeUser
    }
  }, [coockieToken]);

  // Fonction de login
  const login = useCallback((newToken) => {
    Cookies.set("auth_token", newToken, { expires: 1 });
    const decodedUser = decodeToken(newToken); // Utiliser le token reçu dans login
    setUser(decodedUser);
  }, []);

  // Fonction de déconnexion
  const logout = useCallback(async () => {
    try {
      // Appeler l'API de déconnexion
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/logout`,
        {
          method: "POST",
          credentials: "include", // Pour inclure les cookies dans la requête
        }
      );

      if (response.ok) {
        console.info("Déconnexion réussie");
        // Suppression du cookie côté client
        Cookies.remove("auth_token", { path: "/" });
        setUser(null); // Réinitialiser l'état de l'utilisateur
      } else {
        console.error("Échec de la déconnexion");
      }
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  }, []);

  // ajout de userId
  const userId = user?.id;

  const contextValue = useMemo(
    () => ({ user, userId, login, logout }),
    [user, userId, login, logout]
  );

  // Fournir le contexte avec les fonctions et l'utilisateur
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
