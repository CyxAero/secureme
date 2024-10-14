import PropTypes from "prop-types";

export default function InputOption({ label, checked, onChange }) {
  return (
    <div>
      <input
        type="radio"
        name="generation-type"
        id={label.toLowerCase()}
        value={label.toLowerCase()}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={label.toLowerCase()} className="ps-1">
        {label}
      </label>
    </div>
  );
}

InputOption.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
