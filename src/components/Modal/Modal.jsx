import React from 'react';

const Modal = ({ src, onClick }) => {
  const eventListeners = React.useRef();
  const keyDown = React.useCallback(e => {
    e.key === 'Escape' && onClick('');
    // eslint-disable-next-line
  }, []);
  

  React.useEffect(() => {
    document.removeEventListener('keydown', eventListeners.current, true);

    eventListeners.current = keyDown;

    document.addEventListener('keydown', eventListeners.current, true);
  }, [keyDown]);

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
