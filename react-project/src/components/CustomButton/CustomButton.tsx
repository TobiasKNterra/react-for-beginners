import style from "./CustomButton.module.css";

interface CustomButtonProps {
  onClick: () => void;
  text: string;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
