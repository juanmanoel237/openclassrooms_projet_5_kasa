// Collapse.jsx
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./collapse.scss";
import arrow from '../../assets/Image/arrow/down.png';

const Collapse = ({ collapseTitle, collapseDescription }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const innerContentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    const content = contentRef.current;
    const innerContent = innerContentRef.current;
    
    if (isOpen) {
      const height = innerContent.getBoundingClientRect().height;
      content.style.maxHeight = `${height}px`;
    } else {
      content.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="collapse-container">
      <div className="collapse-title-container" onClick={toggleCollapse}>
        <div className="collapse-title">
          {collapseTitle}
          <img
            src={arrow}
            alt="flêche"
            className={`arrow-icon ${isOpen ? "arrow-up" : ""}`}
          />
        </div>
      </div>
      <div
        ref={contentRef}
        className={`collapse-description-wrapper ${isOpen ? "open" : ""}`}
      >
        <div ref={innerContentRef} className="collapse-description">
          {collapseDescription}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  collapseTitle: PropTypes.string.isRequired,
  collapseDescription: PropTypes.node.isRequired,
};

export default Collapse;