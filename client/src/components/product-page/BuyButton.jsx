// Hooks
import PropTypes from "prop-types";
import { useContext } from "react";

// Context
import { VideoContext } from "../../context/VideoContext";
import { ProductContext } from "../../context/ProductContext";

// Components
import Button from "../shared/Button";

// Utils
import { calculateCost } from "../../functions/calculateCost";

// CSS
import "./styles/BuyButton.css";

function BuyButton({ onClickConnect, addToCart }) {
  const { videoData, videoIsLoading } = useContext(ProductContext);
  const { section } = useContext(VideoContext);

  const handleClick = () => {
    if (onClickConnect) {
      // Si l'utilisateur n'est pas connecté, ouvre la modal de connexion
      onClickConnect();
    } else if (addToCart) {
      // Si l'utilisateur est connecté, ajoute l'atelier au panier
      // console.log("Ajouter l'atelier au panier");
      // Ajoutez la logique pour ajouter l'article au panier ici
    }
  };

  const lastEntry = async () => {
    const entries = await videoData[videoData.length - 1];
    return entries;
  };

  if (videoIsLoading) return "loading";

  return (
    <div className="buy-button">
      <div className="buy-button__title">
        <h1>{videoData[0].workshop_title}</h1>
      </div>
      <div className="buy-button__description">
        <p>{videoData[section].video_description}</p>
      </div>
      <div className="buy-button__content">
        <p>
          {lastEntry.video_section}
          {" parties + ressources"}
        </p>
      </div>
      <div className="buy-button__pricing">
        {calculateCost(videoData[0].price_ht, videoData[0].tva)} {" €"}
      </div>

      <div className="buy-button__button">
        <Button
          text="Ajouter au panier"
          style={{
            fontSize: "1rem",
            fontFamily: "var(--font-header)",
            backgroundColor: "var(--clr-pink)",
            fontWeight: "100",
            padding: "0.5rem 3rem",
          }}
          onClick={handleClick} // Appel de la fonction handleClick lors du clic
        />
      </div>
    </div>
  );
}

BuyButton.propTypes = {
  onClickConnect: PropTypes.func.isRequired, // Attendre une fonction, pas un booléen
  addToCart: PropTypes.bool.isRequired,
};

export default BuyButton;
