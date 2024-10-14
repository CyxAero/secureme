import PropTypes from "prop-types";
import InputOption from "./InputOption";
import PassphraseOptions from "./PassphraseOptions";
import PasswordOptions from "./PasswordOptions";

export default function GeneratorOptions({
  generationType,
  setGenerationType,
  options,
  handleOptionChange,
}) {
  return (
    <section className="rounded-lg bg-gray-300 p-6 transition-all duration-300 ease-in-out">
      <h2 className="text-balance pb-2 text-xl font-bold md:text-2xl">
        Customize your password
      </h2>
      <section className="grid gap-2">
        <fieldset className="flex gap-4 text-lg accent-black">
          <InputOption
            label="Password"
            checked={generationType === "password"}
            onChange={() => setGenerationType("password")}
          />
          <InputOption
            label="Passphrase"
            checked={generationType === "passphrase"}
            onChange={() => setGenerationType("passphrase")}
          />
        </fieldset>

        <fieldset className="accent-black">
          <legend className="pb-1 text-lg font-bold">More Options</legend>
          {generationType === "password" ? (
            <PasswordOptions
              options={options.password}
              handleOptionChange={(option, value) =>
                handleOptionChange("password", option, value)
              }
            />
          ) : (
            <PassphraseOptions
              options={options.passphrase}
              handleOptionChange={(option, value) =>
                handleOptionChange("passphrase", option, value)
              }
            />
          )}
        </fieldset>
      </section>
    </section>
  );
}

GeneratorOptions.propTypes = {
  generationType: PropTypes.string.isRequired,
  setGenerationType: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};
