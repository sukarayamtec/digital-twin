import styles from "./Button.module.css";

export default function Button({ label , onClick}) {
  return <button onClick={onClick} className={styles.button}>{label}</button>;
}
