import PropTypes from "prop-types";

export default function SeparatorOption({
  id,
  separatorText,
  isChecked,
  onChange,
}) {
  return (
    <div>
      <input
        type="radio"
        name="separator"
        id={id}
        hidden
        checked={isChecked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`flex items-center justify-center ${isChecked ? "bg-black text-white" : "bg-slate-400"} aspect-square w-8 rounded-lg text-lg font-bold`}
      >
        {separatorText}
      </label>
    </div>
  );
}

SeparatorOption.propTypes = {
  id: PropTypes.string.isRequired,
  separatorText: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
