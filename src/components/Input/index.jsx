import styles from "./Input.module.css";

export default function Input({ type, text, name, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name} className="text-indigo-800">
        {text}:
      </label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value}
        className="bg-indigo-100"
        required={true}
      />
    </div>
  );
}
