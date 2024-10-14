import { useState, useEffect, useCallback } from "react";
import generatePassword from "../assets/api";
import scoreToWord from "../assets/scores";
import calculateFontSize from "../assets/calculateFontSize";
import { Copy, DiceFive } from "@phosphor-icons/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import IconButton from "./IconButton";
import GeneratorOptions from "./GeneratorOptions";
import useDebounce from "../hooks/useDebounce";

export default function GeneratorForm() {
  const [generationType, setGenerationType] = useState("password");
  const [generatedText, setGeneratedText] = useState("");
  const [strength, setStrength] = useState(0);
  const [crackTime, setCrackTime] = useState("");
  const [options, setOptions] = useState({
    password: {
      length: 12,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    },
    passphrase: {
      words: 5,
      capitalize: false,
      numbers: false,
      separator: "-",
    },
  });
  const [isGenerating, setIsGenerating] = useState(false);

  // Debounce the options and generationType
  const debouncedOptions = useDebounce(options, 300);
  const debouncedGenerationType = useDebounce(generationType, 300);

  const handleOptionChange = (type, option, value) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [type]: {
        ...prevOptions[type],
        [option]: value,
      },
    }));
  };

  const handleGeneratePassword = useCallback(
    async (event) => {
      if (event) event.preventDefault();
      setIsGenerating(true);
      try {
        const data = await generatePassword(
          debouncedGenerationType,
          debouncedOptions[debouncedGenerationType],
        );
        setGeneratedText(data.generated_text);
        setStrength(data.strength);
        setCrackTime(data.crack_time);
      } finally {
        setIsGenerating(false);
      }
    },
    [debouncedOptions, debouncedGenerationType],
  );

  const handleCopyToClipboard = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(generatedText);
  };

  useEffect(() => {
    handleGeneratePassword();
  }, [handleGeneratePassword]);

  return (
    <form className="flex flex-col gap-6 pt-10">
      <section className="flex flex-col-reverse gap-2 md:flex-col">
        {/* GENERATED TEXT */}
        <section className="flex w-full rounded-md bg-gray-950 py-4 pe-4 text-white">
          <section className="flex h-14 flex-1 items-center justify-center">
            {isGenerating ? (
              <DotLottieReact
                className="h-full w-full"
                src="loading-boxes.lottie"
                loop
                autoplay
              />
            ) : (
              <textarea
                className={`border-red w-full resize-none bg-transparent px-1 py-2 text-center font-bold outline-none md:px-2 md:py-4 md:text-[${calculateFontSize(generatedText).desktop}] text-[${calculateFontSize(generatedText).mobile}]`}
                name="generated-text"
                id="generated-text"
                rows="1"
                readOnly
                value={generatedText}
                tabIndex={-1}
              />
            )}
            <IconButton
              icon={<Copy size={48} />}
              onClick={handleCopyToClipboard}
              hoverText="Copy to Clipboard"
              successText="Copied!"
            />
            <IconButton
              icon={<DiceFive size={48} />}
              onClick={handleGeneratePassword}
              hoverText="Regenerate Password"
              successText="Regenerating!"
            />
          </section>
        </section>
        {/* PASSWORD STRENGTH AND CRACK TIME */}
        <section className="flex flex-col gap-1 font-bold md:flex-row md:gap-10">
          <h2>Password Strength: {scoreToWord[strength]}</h2>
          <h2>Estimated Crack Time: {crackTime}</h2>
        </section>
      </section>
      <GeneratorOptions
        generationType={generationType}
        setGenerationType={setGenerationType}
        options={options}
        handleOptionChange={handleOptionChange}
      />
    </form>
  );
}
