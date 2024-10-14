import PropTypes from "prop-types";

export default function CheckboxOption({ label, checked, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        name={label.toLowerCase()}
        id={label.toLowerCase()}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={label.toLowerCase()} className="ps-1">
        {label}
      </label>
    </div>
  );
}

CheckboxOption.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
