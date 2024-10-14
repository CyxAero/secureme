import PropTypes from "prop-types";
import SeparatorOption from "./SeparatorOption";
import separatorOptions from "../assets/separatorOptions";
import CheckboxOption from "./CheckboxOption";

export default function PassphraseOptions({ options, handleOptionChange }) {
  return (
    <section className="flex flex-col-reverse gap-2 md:flex-row md:gap-4">
      <div className="grid gap-2 md:gap-1">
        {/* TOP ROW */}
        <div className="flex gap-4">
          <CheckboxOption
            label="Capitalize"
            checked={options.capitalize}
            onChange={(e) => handleOptionChange("capitalize", e.target.checked)}
          />
          <CheckboxOption
            label="Numbers"
            checked={options.numbers}
            onChange={(e) => handleOptionChange("numbers", e.target.checked)}
          />
        </div>
        <label className="col-span-2">
          Separator
          <section className="flex gap-2">
            {separatorOptions.map((option) => (
              <SeparatorOption
                key={option.id}
                id={option.id}
                separatorText={option.separatorText}
                isChecked={options.separator === option.separatorText}
                onChange={() =>
                  handleOptionChange("separator", option.separatorText)
                }
              />
            ))}
          </section>
        </label>
      </div>

      <label className="flex flex-col">
        <input
          type="range"
          name="length"
          id="length"
          min={3}
          max={12}
          value={options.words}
          onChange={(e) => handleOptionChange("words", Number(e.target.value))}
        />
        {options.words} Words
      </label>
    </section>
  );
}

PassphraseOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};
