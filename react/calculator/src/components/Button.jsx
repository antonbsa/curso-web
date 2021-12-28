import '../styles/Button.css';

function Button(props) {
  const { label, operation, double, triple, click } = props;
  let classes = 'button ';
  classes += operation ? 'operation ' : '';
  classes += double ? 'double ' : '';
  classes += triple ? 'triple ' : '';

  return (
    <button
      onClick={() => click && click(label)}
      className={classes}>
      {label}
    </button>
  )
}

export default Button;
