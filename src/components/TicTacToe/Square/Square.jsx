import styles from "./Square.module.css";

export default function Square({ value, isDisabled, ...props }) {
  const isActive = isDisabled ? styles.squareDisabled : styles.square;

  return (
    <button disabled={isDisabled} className={isActive} {...props}>
      {value}
    </button>
  );
}
