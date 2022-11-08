import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Searchbar({ onSubmit }) {
  const [keyword, setKeyword] = useState('');
  const onInputChange = event => setKeyword(event.target.value);
  const reset = () => setKeyword('');
  const onFormSubmit = event => {
    event.preventDefault();
    if (!keyword) {
      Notify.warning('Sorry, your query is empty, please, make your choice');
      return;
    }
    onSubmit(keyword);
    reset();
  };

  return (
    <>
      <header className={s.searchbar}>
        <form className={s.searchbarForm} onSubmit={onFormSubmit}>
          <button type="submit" className={s.buttonLabel}></button>
          <input
            name="keyword"
            className={s.input}
            value={keyword}
            onChange={onInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
