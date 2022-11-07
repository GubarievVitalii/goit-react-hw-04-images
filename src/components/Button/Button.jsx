import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} type="button" className={s.loadMore}>
        Load more
      </button>
    </>
  );
};

export default Button;
