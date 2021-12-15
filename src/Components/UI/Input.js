import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <input
      className={`${props.className} ${classes.input} `}
      {...props.input}
    />
  );
};

export default Input;
