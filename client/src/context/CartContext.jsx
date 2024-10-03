import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types"; // Importer prop-types
import axios from "axios";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un atelier au panier
  const addToCart = async (userId, workshopId) => {
    try {
      // Requête POST vers l'API pour ajouter l'atelier au panier
      const response = await axios.post(
        `http://localhost:3310/api/cart/user/${userId}/workshop/${workshopId}`
      );

      if (response.status === 200) {
        const newWorkshop = {
          id: workshopId,
          title: "Nom de l'atelier",
          price: 100,
        }; // Exemple de données
        setCartItems((prevItems) => [...prevItems, newWorkshop]);
      } else {
        console.error("Erreur lors de l'ajout de l'atelier au panier");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'atelier au panier:", error);
    }
  };

  // Utilisation de useMemo pour mémoriser les valeurs et éviter les re-rendus inutiles
  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      getCartItems: () => cartItems,
    }),
    [cartItems] // Mémoriser lorsque cartItems change
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Définir les propTypes pour valider les types de props
CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // `children` est requis et doit être un nœud React
};

export const useCart = () => useContext(CartContext);
