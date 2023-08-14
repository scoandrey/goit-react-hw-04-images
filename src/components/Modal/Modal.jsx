import React, { useEffect } from 'react';

const Modal = ({ src, onClick }) => {
  useEffect(() => {
    const keyDown = e => {
      e.key === 'Escape' && onClick('');
    };
    window.addEventListener('keydown', keyDown, true);

    return () => window.removeEventListener('keydown', keyDown, true);
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
