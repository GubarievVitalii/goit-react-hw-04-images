import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Searchbar extends Component {
  state = {
    keyword: '',
  };

  onInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  reset = () => this.setState({ keyword: '' });

  onFormSubmit = event => {
    event.preventDefault();
      if (!this.state.keyword) {
          Notify.warning('Sorry, your query is empty, please, make your choice');
      return;
    }
    const { onSubmit } = this.props;

    onSubmit(this.state.keyword);
  };

  render() {
    return (
      <>
        <header className={s.searchbar}>
          <form className={s.searchbarForm} onSubmit={this.onFormSubmit}>
            <button type="submit" className={s.buttonLabel}></button>
            <input
              name="keyword"
              className={s.input}
              value={this.state.keyword}
              onChange={this.onInputChange}
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
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
