import {
  FloatingArrow,
  FloatingPortal,
  arrow,
  flip,
  offset,
  shift,
  useClientPoint,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";
import React from "react";
import { Marker } from "../../generatedApis";

const ARROW_HEIGHT = 7;
const GAP = 15;

interface PropsType {
  marker: Marker | undefined;
}

function MarkerTooltip({ marker }: PropsType) {
  const arrowRef = React.useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: Boolean(marker),
    placement: "top",
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
  });

  const { isMounted, styles } = useTransitionStyles(context);

  const clientPoint = useClientPoint(context);

  const { getFloatingProps } = useInteractions([clientPoint]);

  if (!isMounted || !marker) {
    return null;
  }

  return (
    <FloatingPortal>
      <div ref={refs.setReference} />
      <div
        ref={refs.setFloating}
        style={{ ...floatingStyles, ...styles }}
        className="bg-lime-200 px-3 py-1 rounded"
        {...getFloatingProps()}
      >
        <FloatingArrow
          ref={arrowRef}
          context={context}
          className="fill-lime-200"
        />
        {`${marker.node}.${marker.subnet}`}
      </div>
    </FloatingPortal>
  );
}

export default MarkerTooltip;

