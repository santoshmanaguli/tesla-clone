import styles from "./Button.module.css";

export const Button = (props) => {
  return <button type="submit" style={props.styles}>{props.btnName}</button>;
};
