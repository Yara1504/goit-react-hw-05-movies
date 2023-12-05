import { useState } from 'react';
import css from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const changeInput = event => {
    setQuery(event.target.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit(query.toLowerCase());
  };

  return (
    <form className={css.form} onSubmit={onSubmitForm}>
      <input className={css.input}
        type="text"
        value={query}
        onChange={changeInput}
      />
      <button className={css.button} type="submit">Search</button>
    </form>
  );
};
export default Form;
