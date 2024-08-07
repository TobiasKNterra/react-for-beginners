
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}

export default function CustomButton(props: CustomButtonProps) {
  return <button onClick={props.onClick} className={styles.button}>{props.text}</button>;
}