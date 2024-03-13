import styles from "./CustomThemeButton.module.css";

interface CustomThemeButtonProps {
  type: "primary" | "secondary" | "tertiary";
  onClick: () => void;
  text: string;
}

export default function CustomThemeButton({
  type,
  text,
  onClick,
}: CustomThemeButtonProps) {
  return (
    <button onClick={onClick} className={styles[type]}>
      {text}
    </button>
  );
}
