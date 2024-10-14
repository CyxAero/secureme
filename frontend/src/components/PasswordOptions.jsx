import PropTypes from "prop-types";
import CheckboxOption from "./CheckboxOption";
import checkboxItems from "../assets/passwordOptions";

export default function PasswordOptions({ options, handleOptionChange }) {
  const handleCheckboxChange = (option, value) => {
    if (option === "uppercase" || option === "lowercase") {
      // Ensure at least one of uppercase or lowercase is always checked
      if (
        !value &&
        !options[option === "uppercase" ? "lowercase" : "uppercase"]
      ) {
        return; // Prevent unchecking if the other option is also unchecked
      }
    }
    handleOptionChange(option, value);
  };
  return (
    <section className="flex flex-col-reverse gap-4 md:flex-row md:gap-12">
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {checkboxItems.map((item) => (
          <CheckboxOption
            key={item}
            label={item}
            checked={options[item.toLowerCase()]}
            onChange={(e) =>
              handleCheckboxChange(item.toLowerCase(), e.target.checked)
            }
          />
        ))}
      </div>

      <label className="flex flex-col">
        <input
          type="range"
          name="length"
          id="length"
          min={8}
          max={100}
          value={options.length}
          onChange={(e) => handleOptionChange("length", Number(e.target.value))}
        />
        {options.length} Characters
      </label>
    </section>
  );
}

PasswordOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};
