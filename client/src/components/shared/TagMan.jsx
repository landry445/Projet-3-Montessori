import PropTypes from "prop-types";
import "./styles/TagMan.css";
import Stars from "../svg/Stars";
import Crayon from "../svg/Crayon";
import kid from "../../../public/tagMan00.png";

/**
 * Composant `TagMan` avec plusieurs Tags modifiables.
 *
 * @param {string} props.tag1 - 1er tag à gauche
 * @param {string} props.tag2 - tag centré
 * @param {string} props.tag3 - tag à droite
 *
 * @returns {JSX.Element} - Le composant `Tagman` rendu avec le tag HTML spécifié.
 */

/*
Les props de TagMan :
Il y a 3 props à passer pour les 3 Tags de gauche à droite (tag1, tag2, tag3)
Il faut simplement mettre une stringEx : tag1="#Développer"
*/

function TagMan({ tag1, tag2, tag3 }) {
  return (
    <div className="tagman">
      <img className="tagman__image" src={kid} alt="petit garçon" />
      <div className="tagman__tag-rect tagman__tag1">
        <p className="tagman__tag1-p">{tag1}</p>
      </div>
      <div className="tagman__tag-round tagman__tag2">
        <Crayon width={25} height={25} className="tagman__tag2-crayon" />
      </div>
      <div className="tagman__tag-rect tagman__tag3">
        <p className="tagman__tag3-p">{tag2}</p>
      </div>
      <div className="tagman__tag-round tagman__tag4">
        <Stars width={30} height={30} className="tagman__tag4-stars" />
      </div>
      <div className="tagman__tag-rect tagman__tag5">
        <p className="tagman__tag5-p">{tag3}</p>
      </div>
    </div>
  );
}

export default TagMan;

TagMan.propTypes = {
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  tag3: PropTypes.string.isRequired,
};
