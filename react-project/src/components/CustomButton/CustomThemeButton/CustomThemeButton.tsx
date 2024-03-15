import styles from "./CustomThemeButton.module.css";

interface CustomThemeButtonProps {
  text: string;
  onClick?: () => void;
  type: "primary" | "secondary" | "tertiary";
}

export default function CustomThemeButton(props: CustomThemeButtonProps) {
  const onClick = props.onClick;

  return (
    <button className={styles[props.type]} onClick={onClick}>
      {props.text}
    </button>
  );
}
