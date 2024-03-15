import { useState } from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  buttonText: string;
  handleClick: () => void;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <button
      onClick={() => {
        props.handleClick();
      }}
      className={styles.button}
    >
      {props.buttonText}
    </button>
  );
}
