import styles from "./Select.module.css";

export default function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name} className="text-indigo-800">
        {name}:
      </label>
      <select
        name={name}
        id={name}
        className="bg-indigo-100"
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>{text}</option>
      </select>
    </div>
  );
}
