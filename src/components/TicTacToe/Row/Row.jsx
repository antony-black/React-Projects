import Square from "../Square/Square";
import styles from "./Row.module.css";

export default function Row({ squares, handleClick, from, to, isDisabled }) {
  return (
    <div className={styles.row}>
      {squares.slice(from, to).map((value, index) => (
        <Square
          key={index}
          isDisabled={isDisabled}
          value={value}
          onClick={() => handleClick(from + index)}
        />
      ))}
    </div>
  );
}
