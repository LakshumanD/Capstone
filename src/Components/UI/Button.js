import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={`${props.className} ${classes.button} `}
      {...props.input}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
