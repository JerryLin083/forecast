const Button = ({ children, onClickHandler = null, styles }) => {
  return (
    <button onClick={onClickHandler} className={styles}>
      {children}
    </button>
  );
};

export default Button;
