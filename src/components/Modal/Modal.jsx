import React, { useEffect } from 'react';

const Modal = ({ src, onClick }) => {
  useEffect(() => {
    const keyDown = e => {
      e.key === 'Escape' && onClick('');
    };
    document.removeEventListener('keydown', keyDown, true);

    return document.addEventListener('keydown', keyDown, true);
  }, [onClick]);

  const handleClick = e => {
    e.target === e.currentTarget && onClick('');
  };

  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default Modal;
