import React from 'react';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;
