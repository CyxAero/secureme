import PropTypes from "prop-types";
import {
  useHover,
  useClick,
  useFloating,
  useInteractions,
  offset,
} from "@floating-ui/react";
import { useState } from "react";

export default function IconButton({ icon, onClick, hoverText, successText }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: "top",
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(30)],
  });

  const hover = useHover(context);
  const click = useClick(context, {
    ignoreMouse: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    click,
  ]);

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        type="button"
        onClick={(event) => onClick(event)}
      >
        {icon}
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="rounded-lg bg-gray-950 p-2 text-white opacity-75"
        >
          {hoverText}
        </div>
      )}
    </>
  );
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  hoverText: PropTypes.string.isRequired,
  successText: PropTypes.string.isRequired,
};
