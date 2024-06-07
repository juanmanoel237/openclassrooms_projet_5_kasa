import { useState } from "react";
import PropTypes from "prop-types";
import "./collapse.scss";
import arrow from '../../assets/Image/arrow/down.png';

const Collapse = ({ collapseTitle, collapseDescription }) => {
  // Initialise l'état isOpen à false, indiquant que le collapse est fermé par défaut
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour inverser l'état d'ouverture du collapse
  const toggleCollapse = () => {
    // Utilise la version fonctionnelle de setIsOpen pour s'assurer que l'état est basé sur sa valeur actuelle
    setIsOpen(prevState => !prevState);
    // prevState est la valeur actuelle de isOpen
    // Si isOpen est true, !prevState sera false, et vice-versa
  };

  return (
    <div className="collapse-container">
      {/* Conteneur du titre qui, lorsqu'il est cliqué, déclenche le basculement de l'état */}
      <div className="collapse-title-container" onClick={toggleCollapse}>
        <div className="collapse-title">
          {collapseTitle}
          {/* Image de la flèche qui change d'orientation en fonction de l'état isOpen */}
          <img
            src={arrow}
            alt="flêche"
            className={`arrow-icon ${isOpen ? "arrow-up" : "arrow-down"}`}
          />
        </div>
      </div>
      {/* Affiche la description si isOpen est true */}
      {isOpen && (
        <div className="collapse-description">
          {collapseDescription}
        </div>
      )}
    </div>
  );
};

// Définition des prop types pour assurer que les bonnes propriétés sont passées au composant
Collapse.propTypes = {
  collapseTitle: PropTypes.string.isRequired, // Titre du collapse, doit être une chaîne de caractères et est requis
  collapseDescription: PropTypes.node.isRequired, // Description du collapse
};

export default Collapse;
